import { UserService } from './../services/user.service';
import { User } from './../interfaces/user';
import { AuthService } from './../services/auth.service';
import { trigger, transition, style, group, animate } from '@angular/animations';
import { CartService } from './../services/cart.service';
import { Good } from './../interfaces/good';
import { Subscription } from 'rxjs';
import { GoodelectronicsService } from './../services/goodelectronics.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(20px)'
        }), group([
          animate(500, style({
            opacity: 1
          })), animate(500, style({
            transform: 'translateX(0)'
          }))
        ])
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  @ViewChild('image', { static: false }) image
  goodsObservable: Subscription
  appt: Good[] = []
  electron: Good[] = []
  health: Good[] = []
  mobile: Good[] = []
  mom: Good[] = []
  toy: Good[] = []
  view = 1  
   myUser:any;
  constructor(private gs: GoodelectronicsService,
    private cs: CartService,
    private as: AuthService,
    private userService :UserService,
    private title: Title) { 
      this.title.setTitle('Dashboard');
      this.myUser = this.userService.user;
      console.log('Current User', this.myUser);
      
  }

  ngOnInit() {
    if (this.as.userId) {
      this.cs.getCart()
    }
   
    /* =========================================================================== */
    this.goodsObservable = this.gs.getGoodsAppliances().subscribe(cart => {
      this.appt = cart.map(dashOne => {
        return {
          id: dashOne.payload.doc.id,
          ...dashOne.payload.doc.data()
        }
      })
      console.log(this.appt)
    })
    /* =========================================================================== */
    this.goodsObservable = this.gs.getGoodsElectronecs().subscribe(cart => {
      this.electron = cart.map(dashTwo => {
        return {
          id: dashTwo.payload.doc.id,
          ...dashTwo.payload.doc.data()
        }
      })
      console.log(this.electron)
    })
    /* =========================================================================== */
    this.goodsObservable = this.gs.getGoodsHealth().subscribe(cart => {
      this.health = cart.map(dashThree => {
        return {
          id: dashThree.payload.doc.id,
          ...dashThree.payload.doc.data()
        }
      })
      console.log(this.health)
    })
    /* =========================================================================== */
    this.goodsObservable = this.gs.getGoodsMobile().subscribe(cart => {
      this.mobile = cart.map(dashFour => {
        return {
          id: dashFour.payload.doc.id,
          ...dashFour.payload.doc.data()
        }
      });
      console.log(this.mobile)
    })
    /* =========================================================================== */
    this.goodsObservable = this.gs.getGoodsMom().subscribe(cart => {
      this.mom = cart.map(dashFive => {
        return {
          id: dashFive.payload.doc.id,
          ...dashFive.payload.doc.data()
        }
      });
      console.log(this.mom)
    })
    /* =========================================================================== */
    this.goodsObservable = this.gs.getGoodsToy().subscribe(cart => {
      this.toy = cart.map(dashSix => {
        return {
          id: dashSix.payload.doc.id,
          ...dashSix.payload.doc.data()
        }
      });
      console.log(this.toy)
    })

  }

  ngOnDestroy() {
    this.goodsObservable.unsubscribe()
  }

  viewNew() {
    this.view = 1;
  }

  viewGoods() {
    this.view = 2
  }

  /*----------------------------------------------------------------------------*/
  /* One */
  saveOne(index) {
    this.gs.saveOne(this.appt[index].id, this.appt[index].price);
    alert(`${this.appt[index].name} price has been updated successfully.`);
  }
  deleteOne(index) {
    this.gs.deleteOne(this.appt[index].id);
    alert(`${this.appt[index].name} has been deleted successfully.`);
  }
  /* Two */
  saveTwo(index) {
    this.gs.saveTwo(this.electron[index].id, this.electron[index].price);
    alert(`${this.electron[index].name} price has been updated successfully.`);
  }
  deleteTwo(index) {
    this.gs.deleteTwo(this.electron[index].id);
    alert(`${this.electron[index].name} has been deleted successfully.`);
  }
  /* Three */
  saveThree(index) {
    this.gs.saveThree(this.health[index].id, this.health[index].price);
    alert(`${this.health[index].name} price has been updated successfully.`);
  }
  deleteThree(index) {
    this.gs.deleteThree(this.health[index].id);
    alert(`${this.health[index].name} has been deleted successfully.`);
  }
  /* Four */
  saveFour(index) {
    this.gs.saveFour(this.mobile[index].id, this.mobile[index].price);
    alert(`${this.mobile[index].name} price has been updated successfully.`);
  }
  deleteFour(index) {
    this.gs.deleteFour(this.mobile[index].id);
    alert(`${this.mobile[index].name} has been deleted successfully.`);
  }
  /* Five */
  saveFive(index) {
    this.gs.saveFive(this.mom[index].id, this.mom[index].price);
    alert(`${this.mom[index].name} price has been updated successfully.`);
  }
  deleteFive(index) {
    this.gs.deleteFive(this.mom[index].id);
    alert(`${this.mom[index].name} has been deleted successfully.`);
  }
  /* six */
  saveSix(index) {
    this.gs.saveSix(this.toy[index].id, this.toy[index].price);
    alert(`${this.mom[index].name} price has been updated successfully.`);
  }
  deleteSix(index) {
    this.gs.deleteSix(this.toy[index].id);
    alert(`${this.toy[index].name} has been deleted successfully.`);
  }
  /*----------------------------------------------------------------------------*/


  addNewGoodMom(form: NgForm) {
    const name = (<Good>form.value).name;
    const price = (<Good>form.value).price;
    const image = (this.image.nativeElement as HTMLInputElement).files[0];
    if (form.valid) {
      this.gs.addNewGoodMom(name, price, image)
    }
  }

  addNewGoodMobile(form: NgForm) {
    const name = (<Good>form.value).name;
    const price = (<Good>form.value).price;
    const image = (this.image.nativeElement as HTMLInputElement).files[0];
    if (form.valid) {
      this.gs.addNewGoodMobile(name, price, image);
    }
  }

  addNewGoodToys(form: NgForm) {
    const name = (<Good>form.value).name;
    const price = (<Good>form.value).price;
    const image = (this.image.nativeElement as HTMLInputElement).files[0];
    if (form.valid) {
      this.gs.addNewGoodToys(name, price, image);
    }
  }

  addNewGoodAppliances(form: NgForm) {
    const name = (<Good>form.value).name;
    const price = (<Good>form.value).price;
    const image = (this.image.nativeElement as HTMLInputElement).files[0];
    if (form.valid) {
      this.gs.addNewGoodAppliances(name, price, image);
    }
  }

  addNewGoodHealth(form: NgForm) {
    const name = (<Good>form.value).name;
    const price = (<Good>form.value).price;
    const image = (this.image.nativeElement as HTMLInputElement).files[0];
    if (form.valid) {
      this.gs.addNewGoodHealth(name, price, image);
    }
  }

  addNewGoodElectronics(form: NgForm) {
    const name = (<Good>form.value).name;
    const price = (<Good>form.value).price;
    const image = (this.image.nativeElement as HTMLInputElement).files[0];
    if (form.valid) {
      this.gs.addNewGoodElectronics(name, price, image);
    }
  }


}
