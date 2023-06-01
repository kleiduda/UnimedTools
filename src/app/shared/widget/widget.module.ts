import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';
import { PreloaderComponent } from './preloader/preloader.component';
import { NgbDropdownModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PreloaderComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    FormsModule,
    SimplebarAngularModule,
    NgApexchartsModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    CountUpModule
  ],
  exports: [
    PreloaderComponent
  ]
})
export class WidgetModule { }
