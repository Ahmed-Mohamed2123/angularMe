import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodelectronicsService {

  constructor(private fs: AngularFirestore,
    private storage: AngularFireStorage) { }

  getAllGoodsElectronecs() {
    return this.fs.collection('goodselectonecs').snapshotChanges()
  }
  getAllGoodsAppliances() {
    return this.fs.collection('goodsAppliances').snapshotChanges()
  }
  getAllGoodsHelth() {
    return this.fs.collection('goodsHealth').snapshotChanges()
  }
  getAllGoodsMobile() {
    return this.fs.collection('goodsMobile').snapshotChanges()
  }
  getAllGoodsMom() {
    return this.fs.collection('goodsMom').snapshotChanges()
  }
  getAllGoodsToys() {
    return this.fs.collection('goodsToys').snapshotChanges()
  }

  addNewGoodMom(name: string, price: number, image: File) {
    return new Promise((resolve, reject) => {
      let ref = this.storage.ref('goods/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('goodsMom').add({
            name,
            price,
            photoUrl
          }).then(() => resolve(alert('New good added successfully'))).catch(() => reject(alert('Something went wrong!!')))
        })
      })
    })
  }

  addNewGoodMobile(name: string, price:number, image: File) {
    return new Promise((resolve, reject) => {
      let ref = this.storage.ref('goods/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('goodsMobile').add({
            name,
            price,
            photoUrl
          }).then(() => resolve(alert('New good added successfully'))).catch(() => reject(alert('Something went wrong!!')));
        })
      })
    })
  }

  addNewGoodToys(name: string, price:number, image: File) {
    return new Promise((resolve, reject) => {
      let ref = this.storage.ref('goods/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('goodsToys').add({
            name,
            price,
            photoUrl
          }).then(() => resolve(alert('New good added successfully'))).catch(() => reject(alert('Something went wrong!!')));
        })
      })
    })
    
  }

  addNewGoodAppliances(name: string, price:number, image: File) {
    return new Promise((resolve, reject) => {
      let ref = this.storage.ref('goods/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('goodsAppliances').add({
            name,
            price,
            photoUrl
          }).then(() => resolve(alert('New good added successfully'))).catch(() => reject(alert('Something went wrong!!')));
        })
      })
    })
    
  }

  addNewGoodHealth(name: string, price:number, image: File) {
    return new Promise((resolve, reject) => {
      let ref = this.storage.ref('goods/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('goodsHealth').add({
            name,
            price,
            photoUrl
          }).then(() => resolve(alert('New good added successfully'))).catch(() => reject(alert('Something went wrong!!')));
        })
      })
    })
    
  }

  addNewGoodElectronics(name: string, price: number, image: File) {
    return new Promise((resolve, reject) => {
      let ref = this.storage.ref('goods/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('goodselectonecs').add({
            name,
            price,
            photoUrl
          }).then(() => resolve(alert('New good added successfully'))).catch(() => reject(alert('Something went wrong!!')));
        })
      })
    })
    
  }


  /* Appliances */
  getGoodsAppliances() {
    return this.fs.collection('goodsAppliances').snapshotChanges()
  }

  deleteOne(id) {
    return this.fs.doc(`goodsAppliances/${id}`).delete()
  }

  saveOne(id, price) {
    return this.fs.doc(`goodsAppliances/${id}`).update({
      price
    })
  }
  /* Electronics */
  getGoodsElectronecs() {
    return this.fs.collection('goodselectonecs').snapshotChanges()
  }

  deleteTwo(id) {
    return this.fs.doc(`goodselectonecs/${id}`).delete()
  }

  saveTwo(id, price) {
    return this.fs.doc(`goodselectonecs/${id}`).update({
      price
    })
  }
  /* Health */
  getGoodsHealth() {
    return this.fs.collection('goodsHealth').snapshotChanges()
  }

  deleteThree(id) {
    return this.fs.doc(`goodsHealth/${id}`).delete()
  }

  saveThree(id, price) {
    return this.fs.doc(`goodsHealth/${id}`).update({
      price
    })
  }
  /* Mobile */
  getGoodsMobile() {
    return this.fs.collection('goodsMobile').snapshotChanges()
  }

  deleteFour(id) {
    return this.fs.doc(`goodsMobile/${id}`).delete()
  }

  saveFour(id, price) {
    return this.fs.doc(`goodsMobile/${id}`).update({
      price
    })
  }
  /* Mom */
  getGoodsMom() {
    return this.fs.collection('goodsMom').snapshotChanges()
  }

  deleteFive(id) {
    return this.fs.doc(`goodsMom/${id}`).delete()
  }

  saveFive(id, price) {
    return this.fs.doc(`goodsMom/${id}`).update({
      price
    })
  }
  /* Toy */
  getGoodsToy() {
    return this.fs.collection('goodsToys').snapshotChanges()
  }

  deleteSix(id) {
    return this.fs.doc(`goodsToys/${id}`).delete()
  }

  saveSix(id, price) {
    return this.fs.doc(`goodsToys/${id}`).update({
      price
    })
  }
}
