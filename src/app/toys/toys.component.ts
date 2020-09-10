import { AuthService } from './../services/auth.service';
import { CartService } from './../services/cart.service';
import { GoodelectronicsService } from './../services/goodelectronics.service';
import { Subscription } from 'rxjs';
import { Good } from './../interfaces/good';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit, OnDestroy {

  toys: Good[] = []
  goodsObsevable: Subscription
  add: number = -1
  showSpinner: boolean = true

  constructor(private gs: GoodelectronicsService,
    private cs: CartService,
    private as: AuthService,
    private router: Router,
    private title: Title) { 
      this.title.setTitle('Toys')
    }

  ngOnInit() {
    this.goodsObsevable = this.gs.getAllGoodsToys().subscribe(data => {
      this.toys = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      });
      this.showSpinner = false;
      if (this.as.userId) {
        this.cs.getCart()
      }
    })
  }

  ngOnDestroy() {
    this.goodsObsevable.unsubscribe()
  }

  addToCart(index) {
    if (this.as.userId) this.add = +index
    else this.router.navigate(['/signin'])
  }

  buy(amount: number) {
    let selectedGoods = this.toys[this.add]
    let data = {
      name: selectedGoods.name,
      amount: +amount,
      price: selectedGoods.price
    }
    this.cs.addToCart(data).then(() => this.add = -1)
    this.cs.getCart()
  }

}
