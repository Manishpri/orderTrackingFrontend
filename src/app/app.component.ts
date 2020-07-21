import { Component } from '@angular/core';
import { OrderserviceService } from './orderservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private service : OrderserviceService ) { 
    
  }
logout(){
  this.service.logout()
  
}

  title = 'frontend';
  
}
