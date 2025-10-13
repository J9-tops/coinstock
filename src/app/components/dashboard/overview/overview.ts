import { Component } from '@angular/core';
import { AreaChart } from '../area-chart/area-chart';

@Component({
  selector: 'overview',
  imports: [AreaChart],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {}
