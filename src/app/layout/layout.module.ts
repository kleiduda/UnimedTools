import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutContainerComponent } from './layout-container.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { SharedModule } from './shared/shared.module';
import { TwoColumnMenuModule } from './two-column-menu/two-column-menu.module';



@NgModule({
  declarations: [
    LayoutContainerComponent,
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TwoColumnMenuModule
  ],
  exports: [LayoutContainerComponent, PublicLayoutComponent]
})
export class LayoutModule { }
