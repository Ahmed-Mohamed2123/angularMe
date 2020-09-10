import { AuthService } from './../services/auth.service';
import { CartService } from './../services/cart.service';
import { GoodelectronicsService } from './../services/goodelectronics.service';
import { Subscription } from 'rxjs';
import { Good } from './../interfaces/good';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-moms-babies',
  templateUrl: './moms-babies.component.html',
  styleUrls: ['./moms-babies.component.css']
})
export class MomsBabiesComponent implements OnInit, OnDestroy {

  moms: Good[] = []
  goodsObservable: Subscription
  add: number = -1
  showSpinner: boolean = true

  constructor(private gs: GoodelectronicsService,
    private cs: CartService,
    private as: AuthService,
    private router: Router,
    private title: Title) { 
      this.title.setTitle('Moms&Babies')
    }

  ngOnInit() {
    this.goodsObservable = this.gs.getAllGoodsMom().subscribe(data => {
      this.moms = data.map(element => {
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
    let selectedGoods = this.moms[this.add]
    let data = {
      name: selectedGoods.name,
      amount: +amount,
      price: selectedGoods.price
    }
    this.cs.addToCart(data).then(() => this.add = -1)
    this.cs.getCart()
  }

}
