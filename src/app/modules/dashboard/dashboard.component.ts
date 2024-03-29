import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pie = [];
  table = [];
  constructor(
    private dashboardService: DashboardService
  ) {

  }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.BigChart();
    this.cards = this.dashboardService.Cards();
    this.pie = this.dashboardService.Pie();
    this.table = this.dashboardService.Table();
  }

}
