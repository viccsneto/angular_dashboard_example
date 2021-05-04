import { TableComponent } from './../widgets/table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './../components/header/header.component';
import { FooterComponent } from './../components/footer/footer.component';
import { SidebarComponent } from './../components/sidebar/sidebar.component';
import { AreaComponent } from './../widgets/area/area.component';
import { CardComponent } from './../widgets/card/card.component';
import { PieComponent } from './../widgets/pie/pie.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxEchartsModule } from 'ngx-echarts';
import { AS3DComponent } from '../widgets/as3d/AS3D.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
    AS3DComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
    AS3DComponent,
  ],
})
export class SharedModule {}
