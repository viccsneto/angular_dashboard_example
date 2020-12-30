import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_Exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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
        enabled: false
      },
      yAxis: {
        title: {
          text: 'Billions',
        },
        labels: {
          formatter: function () {
            return this.value / 1000;
          },
        },
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      series: [
        {
          name: 'Series 1',
          data: [71, 78, 39, 66],
        },
      ],
    };

    HC_Exporting(this.Highcharts);
  }

}
