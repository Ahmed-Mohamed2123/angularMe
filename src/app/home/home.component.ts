import { UserService } from './../services/user.service';
import { CartService } from './../services/cart.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = ['../../assets/one.jpg', '../../assets/two.jpg', '../../assets/three.jpg']
  myUser: any
  constructor(private as: AuthService,
    private us: UserService, 
    private cs: CartService,
    private title: Title) { 
      this.title.setTitle('Market')
      this.myUser = this.us.user;
      console.log('Current User', this.myUser);
    }

  ngOnInit() {
    if (this.as.userId) {
      this.cs.getCart()
    }
  }

}
