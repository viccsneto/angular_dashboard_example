import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './../components/header/header.component';
import { SidebarComponent } from './../components/sidebar/sidebar.component';
import { FooterComponent } from './../components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
