import { User } from './../interfaces/user';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;

  constructor(private fs: AngularFirestore,
    private as: AuthService) { }

  addNewUser(id ,name, address) {
    return this.fs.doc('users/' + id).set({
      name: name,
      address: address
    })
  }

  getUserData() {
    return this.fs.doc('users/' + this.as.userId).valueChanges()
  }

  getUser() { 
     this.fs.collection('users').snapshotChanges().subscribe(usersData=>{
       const activeUserId = localStorage.getItem('uid');
       this.user = usersData.filter(user=>user.payload.doc.id === activeUserId); // user model should be the same as users list model

    })
  }

}
