import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  all_options = [];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.all_options.push(this.dashboardService.NGXECharts1());
    this.all_options.push(this.dashboardService.NGXECharts2());
    this.all_options.push(this.dashboardService.NGXECharts3());
    this.all_options.push(this.dashboardService.NGXECharts4());
  }
}
