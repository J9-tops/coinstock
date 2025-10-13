import { GlobalService } from '@/app/services/global';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  headerData!: {
    data: {
      active_cryptocurrencies: number;
      upcoming_icos: number;
      ended_icos: number;
      markets: number;
      total_market_cap: {
        [key: string]: number;
      };
      total_volume: {
        [key: string]: number;
      };
      market_cap_change_percentage_24h_usd: number;
      updated_at: number;
    };
  };

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    this.globalService.global('global').subscribe({
      next: (data) => {
        console.log(data);
        this.headerData = data;
      },
      error: (err) => console.log('Error fetching data:', err),
    });
  }
}
