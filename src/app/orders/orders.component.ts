import { AuthService } from './../services/auth.service';
import { UserService } from './../services/user.service';
import { User } from './../interfaces/user';
import { Shopping } from './../interfaces/shopping';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  cart: Shopping[] = []
  i: number
  total: number

  getTotalPrice() {
    this.total = 0;
    for ( this.i = 0; this.i < this.cs.cart.length; this.i++ ) {
      this.total += this.cs.cart[this.i].amount * this.cs.cart[this.i].price;
    }
    return this.total;
  }

  constructor(public cs: CartService, private router: Router, private as: AuthService, private fs: CartService,
    private title: Title) { 
      this.title.setTitle('Cart')
    }

  ngOnInit() {
    this.cs.getCart()
    this.fs.cd()
  }

  delete(index) {
    this.cs.delete(this.cs.cart[index].id)
  }

  save(index) {
    this.cs.save(this.cs.cart[index].id, this.cs.cart[index].amount)
  }

  goToHome() {
    this.router.navigate(['/electronics'])
  }

}
