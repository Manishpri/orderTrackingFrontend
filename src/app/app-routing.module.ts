import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component'
import { OrderComponent } from './order/order.component';
import { AddorderComponent } from './addorder/addorder.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EdituserComponent } from './edituser/edituser.component';
import { OrderguardGuard } from './orderguard.guard'


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path : 'login',component:LoginComponent},
  {path : '', redirectTo:'/login', pathMatch:'full'},
  {path:'order',component:OrderComponent,canActivate:[OrderguardGuard]},
  {path: 'addOrder',component:AddorderComponent,canActivate:[OrderguardGuard]},
  {path : 'userlist',component:UserdetailsComponent,canActivate:[OrderguardGuard]},
  {path : 'edituser',component:EdituserComponent,canActivate:[OrderguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
