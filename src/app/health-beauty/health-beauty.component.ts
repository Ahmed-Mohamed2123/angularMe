import { AuthService } from './../services/auth.service';
import { CartService } from './../services/cart.service';
import { GoodelectronicsService } from './../services/goodelectronics.service';
import { Subscription } from 'rxjs';
import { Good } from './../interfaces/good';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-health-beauty',
  templateUrl: './health-beauty.component.html',
  styleUrls: ['./health-beauty.component.css']
})
export class HealthBeautyComponent implements OnInit, OnDestroy {

  healthy: Good[] = []
  goodsObservable: Subscription
  add: number = -1
  showSpinner: boolean = true

  constructor(private gs: GoodelectronicsService,
    private cs: CartService,
    private as: AuthService,
    private router: Router,
    private title: Title) { 
      this.title.setTitle('Health&Beauty')
    }

  ngOnInit() {
    this.goodsObservable = this.gs.getAllGoodsHelth().subscribe(data => {
      this.healthy = data.map(element => {
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
    this.goodsObservable.unsubscribe()
  }

  addToCart(index) {
    if (this.as.userId) this.add = +index
    else this.router.navigate(['/signin'])
  }

  buy(amount: number) {
    let selectedGoods = this.healthy[this.add]
    let data = {
      name: selectedGoods.name,
      amount: +amount,
      price: selectedGoods.price
    }
    this.cs.addToCart(data).then(() => this.add = -1)
    this.cs.getCart()
  }

}
