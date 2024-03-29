import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_Exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};
  @Input() data;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'RANDOM DATA'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: this.data
      }]
  };

    HC_Exporting(this.Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
