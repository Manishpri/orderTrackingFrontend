import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup}from  '@angular/forms';
import { OrderserviceService } from '../orderservice.service'
@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  constructor(private fb : FormBuilder,private service : OrderserviceService) { }

  orderForm = this.fb.group({
    orderId     :'',
    customerId  :'',
    employeeId  :'',
    orderDate   :'',
    requiredDate:'',
    shippedDate:'',
    shipVia:'',
    frieght:'',
    shipName:'',
    shipAddress:'',
    shipCity:'',
    shipRegion:'',
    shipPostalCode:'',
    shipCountry:''
  })

  ngOnInit(): void {
  }
 order(){
   console.log(this.orderForm.value);
   this.service.addorder(this.orderForm.value).subscribe(response=>{
     console.log(response)
   })
 }
}
