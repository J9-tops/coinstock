import { GlobalService } from '@/app/services/global';
import { CoinItem, GlobalData } from '@/app/types';
import { getTopGainers } from '@/app/utils';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'overview',
  imports: [CommonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  headerData?: GlobalData;
  marketCap: string | null = null;
  volumeCap: string | null = null;
  topTrendingCoins?: CoinItem[] = [];
  topGainers24hrAgo?: CoinItem[] = [];

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    this.globalService.global('global').subscribe({
      next: (data) => {
        this.headerData = data;
        const usdCap = data?.data?.total_market_cap?.['usd'];
        if (usdCap) this.marketCap = Number(Number(usdCap).toFixed(0)).toLocaleString();
        const usdVolume = data?.data?.total_volume?.['usd'];
        if (usdVolume) this.volumeCap = Number(Number(usdVolume).toFixed(0)).toLocaleString();
      },
      error: (err) => console.log('Error fetching data:', err),
    });

    this.globalService.global('/search/trending').subscribe({
      next: (data) => {
        const topThree = data.coins.slice(0, 3).map((c: any) => c.item);
        this.topTrendingCoins = topThree;
        const allCoins = data.coins.map((c: any) => c.item);
        this.topGainers24hrAgo = getTopGainers(allCoins, 3);
      },

      error: (err) => console.log('Error fetching data:', err),
    });
  }
}
