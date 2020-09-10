import { AuthService } from './../services/auth.service';
import { CartService } from './../services/cart.service';
import { GoodelectronicsService } from './../services/goodelectronics.service';
import { Good } from './../interfaces/good';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit, OnDestroy {

  goods: Good[] = []
  goodsObservable: Subscription
  add: number = -1
  showSpinner: boolean = true

  constructor(private gs: GoodelectronicsService,
    private cs: CartService,
    private as: AuthService,
    private router: Router,
    private title: Title) { 
      this.title.setTitle('Electronics')
    }

  ngOnInit() {
    this.goodsObservable = this.gs.getAllGoodsElectronecs().subscribe(data => {
      this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      });
      this.showSpinner = false;
      if (this.as.userId) {
        this.cs.getCart()
      }
    });
  }

  ngOnDestroy() {
    this.goodsObservable.unsubscribe()
  }

  addToCart(index: number) {
    if (this.as.userId) this.add = +index
    else this.router.navigate(['/signin'])
  }

  buy(amount: number) {
    let selectedGood = this.goods[this.add]
    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    }
    this.cs.addToCart(data).then(() => this.add = -1)
    this.cs.getCart()
  }

}
