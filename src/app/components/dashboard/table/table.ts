import { GlobalService } from '@/app/services/global';
import { MarketData } from '@/app/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    if (page < 1) return;

    this.currentPage = page;

    this.globalService
      .global(
        `/coins/markets?vs_currency=usd&per_page=${this.perPage}&page=${page}&price_change_percentage=7d,1h,24h`,
      )
      .subscribe({
        next: (baseData: MarketData[]) => {
          this.marketData = baseData;

          this.hasNextPage = baseData.length === this.perPage;

          this.generatePageNumbers();
        },

        error: (err) => console.log('Error fetching data:', err),
      });
  }

  generatePageNumbers() {
    const maxPagesToShow = 5;
    const pages: number[] = [];

    const start = Math.max(1, this.currentPage - 2);
    const end = this.currentPage + 2;

    for (let i = start; i <= end; i++) {
      if (i >= 1) pages.push(i);
    }

    this.pages = pages;
  }

  goToPage(page: number, event?: Event) {
    if (event) event.preventDefault();
    this.loadPage(page);
  }

  previousPage(event?: Event) {
    if (event) event.preventDefault();
    if (this.currentPage > 1) this.loadPage(this.currentPage - 1);
  }

  nextPage(event?: Event) {
    if (event) event.preventDefault();
    if (this.hasNextPage) this.loadPage(this.currentPage + 1);
  }
}
