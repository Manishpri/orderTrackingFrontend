import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OrderserviceService} from './orderservice.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { AddorderComponent } from './addorder/addorder.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EdituserComponent } from './edituser/edituser.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderguardGuard } from './orderguard.guard'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    OrderComponent,
    AddorderComponent,
    UserdetailsComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [OrderserviceService,OrderguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
