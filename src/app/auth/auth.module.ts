import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './account/login/login.component';
import { LockScreenComponent } from './account/lock-screen/lock-screen.component';
import { LogoutComponent } from './account/logout/logout.component';
import { NgbAlertModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from '../shared/ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from "../shared/widget/widget.module";



@NgModule({
    declarations: [
        LoginComponent,
        LockScreenComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbAlertModule,
        NgbNavModule,
        UiModule,
        AuthRoutingModule,
        WidgetModule
    ]
})
export class AuthModule { }
