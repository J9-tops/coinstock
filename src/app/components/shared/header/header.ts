import { GlobalService } from '@/app/services/global';
import { GlobalData } from '@/app/types';
import { toBillion, toTrillion } from '@/app/utils';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  headerData?: GlobalData;
  marketCap: string | null = null;
  volumeCap: string | null = null;

  constructor(private globalService: GlobalService) {}

  get filteredMarketCapPercentage() {
    const data = this.headerData?.data?.market_cap_percentage;
    if (!data) return [];
    return Object.entries(data)
      .filter(([key]) => key === 'btc' || key === 'eth')
      .map(([key, value]) => ({ key, value }));
  }

  ngOnInit() {
    this.globalService.global('global').subscribe({
      next: (data) => {
        this.headerData = data;
        const usdCap = data?.data?.total_market_cap?.['usd'];
        if (usdCap) this.marketCap = toTrillion(usdCap).toFixed(3);
        const usdVolume = data?.data?.total_volume?.['usd'];
        if (usdVolume) this.volumeCap = toBillion(usdVolume).toFixed(2);
      },
      error: (err) => console.log('Error fetching data:', err),
    });
  }
}
