import { OrdersComponent } from './../orders/orders.component';
import { CartService } from './../services/cart.service';
import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = false
  isUser: boolean = false
  isAdmin: boolean = false
  
  
  constructor(private as: AuthService,
    private us: UserService,
    public cs: CartService) { }

  ngOnInit() {
    this.as.user.subscribe(user => {
      if (user) {
        this.isUser = true
        this.as.userId = user.uid
        this.us.getUserData().subscribe(data => {
          if (data['admin']) this.isAdmin = true;
          else this.isAdmin = false
        })
      }
      else {
        this.isUser = false
        this.as.userId = ''
      }
    })
  }

  logout() {
    this.as.logout().then(() => console.log('out'))
  }

  toggleNav() {
    this.isOpen = !this.isOpen
  }

}
