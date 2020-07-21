import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { OrderserviceService } from '../orderservice.service'

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor( private fb : FormBuilder, private service : OrderserviceService ) { }
  userId : any =''
  role : any
  userForm = this.fb.group({
    fullName : ['',[Validators.required]],
    email : ['',[Validators.required]],
    role : ['',[Validators.required]],
  })

  get f(){
    return this.userForm.controls
  }
 
  userDetail:any=[]
  ngOnInit(): void {
     this.userId = localStorage.getItem('userid');
     this.role = localStorage.getItem('userrole');
     this.service.getUserById(this.userId).subscribe(response=>{
       this.userDetail = response['response']
     })
    
  }

  updateUser(){
    console.log(this.userForm.value)
    this.service.editUser(this.userForm.value,this.userId).subscribe(response=>{
      if(response['status']=='success'){
        alert(response['message'])
      }
    })
  }

}
