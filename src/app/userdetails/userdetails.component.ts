import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../orderservice.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor( private service : OrderserviceService ) { }
  allUsers :any =[]
  role:any
  ngOnInit(): void {

    this.role = localStorage.getItem('userrole');

    this.service.getuser().subscribe(response=>{
      this.allUsers = response['response']
    })
  }

  edit(id){
   localStorage.setItem('userid',id)
  }

}
