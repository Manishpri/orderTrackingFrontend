import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { OrderserviceService } from '../orderservice.service'
import { Router } from '@angular/router'
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private service : OrderserviceService,private router:Router) { }

  loginForm = this.fb.group({
    email : ['',[Validators.required]],
    password : ['',[Validators.required,Validators.minLength(5)]]
  })

  get f(){
    return this.loginForm.controls
  }
  ngOnInit(): void {
  }

  login(){
    
    this.service.login(this.loginForm.value).subscribe(response=>{
      console.log(response['response'])
      if(response['status'] == 'success'){
        let role = response['response'].role
        localStorage.setItem('userrole',role);
        localStorage.setItem('logout',response['_id'])
        this.router.navigate(['/order'])
      }else{
        alert('Incorrect UserName or Password,Please Signup')
      }
    })
  }
}
