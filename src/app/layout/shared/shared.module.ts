import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbAlertModule, NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LeftSidebarComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbAlertModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    NgbNavModule,
    SimplebarAngularModule,
    ClickOutsideModule
  ],
  exports: [
    LeftSidebarComponent,
    TopbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
