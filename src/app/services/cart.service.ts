import { Good } from './../interfaces/good';
import { Shopping } from './../interfaces/shopping';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Shopping[] = []
  

  constructor(private fs: AngularFirestore,
    private as: AuthService) { }

  addToCart(data: Good) {
    return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
  }

  getCart() {
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges().subscribe(cart => {
      this.cart = cart.map(shopping => {
        return {
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        };
      });
      console.log(this.cart)
    });
    
  }
  cd() {
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges().subscribe(cart => {
      this.cart = cart.map(shopping => {
        return {
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        };
      });
      console.log(this.cart)
    });
    
  }

  delete(id) {
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
  }

  save(id, amount) {
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({
      amount
    })
  }
}
