import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators  } from '@angular/forms';
import { OrderserviceService } from '../orderservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private fb:FormBuilder, private service : OrderserviceService,private router:Router ) { }

  userForm = this.fb.group({
    fullName : ['',[Validators.required]],
    email : ['',[Validators.required]],
    role : ['',[Validators.required]],
    password : ['',[Validators.required,Validators.minLength(5)]]
  })

  get f(){
    return this.userForm.controls
  }
  ngOnInit(): void {
  }

  signUp(){
   this.service.create_user(this.userForm.value).subscribe(response=>{
      console.log(response)
      if(response['status']=='success'){
        localStorage.setItem('_id',response['response']._id);
        this.router.navigate(['/login']);
      }else{
        alert('Some thing happened during user creation');
      }
   })
  }
}
