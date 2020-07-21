import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  baseurl = 'http://localhost:3301/'
  constructor(private http:HttpClient,private router:Router) { }
  create_user(form){
    return this.http.post(this.baseurl + 'user/'+'create',form)
  }
  getuser(){
    return this.http.get(this.baseurl + 'user/'+'findusers')
  }
  getUserById(id){
    return this.http.get(this.baseurl + 'user/'+'findone/'+id)
  }
  login(form){
    return this.http.post(this.baseurl + 'user/'+'login',form)
  }
  allorder(page){
    return this.http.get(this.baseurl+'order/'+'find/'+page)
  }
  addorder(form){
    return this.http.post(this.baseurl + 'order/'+'add',form)
  }
  cancelOrder(form,id){
    return this.http.put(this.baseurl + 'order/' + 'cancel_order/'+id,form)
  }
  editUser(form,id){
    return this.http.put(this.baseurl + 'user/'+'update/'+id,form)
  }
  isLoggedIn(){
    return localStorage.getItem('logout') !== null
  }
  logout(){
      // localStorage.removeItem('logout');
      // localStorage.removeItem('userrole');
      localStorage.clear();

      this.router.navigate(['/login'])
  }
}
