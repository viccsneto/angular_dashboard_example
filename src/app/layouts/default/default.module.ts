import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { PostsComponent } from './../../modules/posts/posts.component';
import { SharedModule } from './../../shared/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
  ],
  exports: [
  ]
})
export class DefaultModule { }
