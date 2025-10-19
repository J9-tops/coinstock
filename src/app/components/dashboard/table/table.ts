import { GlobalService } from '@/app/services/global';
import { MarketData } from '@/app/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  marketData?: MarketData[];
  currentPage = 1;
  perPage = 10;
  pages: number[] = [];
  hasNextPage = true;
  isLoading = false;

  constructor(
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const page = params['page'] ? parseInt(params['page'], 10) : 1;

      if (page > 0) {
        this.currentPage = page;
        this.loadPage(this.currentPage);
      } else {
        this.router.navigate(['/dashboard', 1]);
      }
    });
  }

  loadPage(page: number) {
    if (page < 1 || this.isLoading) return;

    this.isLoading = true;

    this.globalService
      .global(
        `/coins/markets?vs_currency=usd&per_page=${this.perPage}&page=${page}&price_change_percentage=1h,24h,7d`,
      )
      .subscribe({
        next: (baseData: MarketData[]) => {
          this.marketData = baseData;
          this.hasNextPage = baseData.length === this.perPage;
          this.generatePageNumbers();
          this.isLoading = false;
        },
        error: (err) => {
          console.log('Error fetching data:', err);
          this.isLoading = false;
        },
      });
  }

  generatePageNumbers() {
    const maxPagesToShow = 5;
    const pages: number[] = [];

    let start = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
    let end = start + maxPagesToShow - 1;

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    this.pages = pages;
  }
}
