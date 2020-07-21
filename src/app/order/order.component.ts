import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../orderservice.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor( private service : OrderserviceService ) { }
  role : any
  allOrders :any =[];
  term: string;
  page : number =1;
  limit :number =5;
  total :number

  ngOnInit(): void {
    this.role = localStorage.getItem('userrole');
    this.service.allorder(this.page).subscribe(response=>{
      // console.log(response)
      this.allOrders = response['response'];
      this.total = response['total']
      console.log(typeof this.total)
    })
  }

  getOrders(page:number){
    this.page = page
    this.service.allorder(this.page).subscribe(response=>{
      this.allOrders = response['response'];
      this.total = response['total']
    })
  }

  cancel(id){
    
    let obj={
      status :'cancel'
    }
    this.service.cancelOrder(obj,id).subscribe(response=>{
      console.log(response)
    })
  }

}
