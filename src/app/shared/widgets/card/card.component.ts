import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_Exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data;



  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60,
      },
      title: {
        text: null
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      tooltip: {
        split: true,
        outside: true,
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false
      },
      series: this.data,
    };

    HC_Exporting(this.Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
