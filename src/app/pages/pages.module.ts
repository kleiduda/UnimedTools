import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ToolsComponent } from './tools/tools/tools.component';
import { PageTitleModule } from "../shared/page-title/page-title.module";


@NgModule({
    declarations: [
        ToolsComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        PageTitleModule
    ]
})
export class PagesModule { }
