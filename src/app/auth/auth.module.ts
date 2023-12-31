import { NoventaLoaderModule } from './../components/noventa-loader/noventa-loader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CreateUserExtraComponent } from './create-user-extra/create-user-extra.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgxMaskModule } from 'ngx-mask';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { ConfirmDataComponent } from './confirm-data/confirm-data.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmPasswordChangeComponent } from './confirm-password-change/confirm-password-change.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    AuthComponent,
    CreateUserComponent,
    CreateUserExtraComponent,
    LoginComponent,
    ForgottenPasswordComponent,
    ConfirmDataComponent,
    ChangePasswordComponent,
    ConfirmPasswordChangeComponent,
    ActiveUserComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    NoventaLoaderModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NzCheckboxModule,
    HttpClientJsonpModule,
    NzSpinModule,
    NzPopoverModule,
    NzInputModule,
    NgxMaskModule.forRoot(),
  ]
})
export class AuthModule { }
