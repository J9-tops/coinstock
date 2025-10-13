import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  grid: ApexGrid;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  fill: ApexFill;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-area-chart',
  imports: [NgApexchartsModule],
  templateUrl: './area-chart.html',
  styleUrls: ['./area-chart.css'],
  standalone: true,
})
export class AreaChart {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'line',
        height: 83,
        toolbar: { show: false },
        dropShadow: { enabled: false },
      },
      series: [
        {
          name: 'Chart',
          data: [6500, 6418, 6456, 6526, 6356, 6456, 6800],
        },
      ],
      xaxis: {
        categories: [
          '01 February',
          '02 February',
          '03 February',
          '04 February',
          '05 February',
          '06 February',
          '07 February',
        ],
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      grid: {
        show: false,
      },
      fill: {
        type: 'solid',
        opacity: 1,
        colors: ['#E14E49'],
      },
      dataLabels: { enabled: false },
      stroke: { width: 1 },
      tooltip: {
        enabled: false,
        x: { show: false },
      },
    };
  }
}
