import { UserService } from './../services/user.service';
import { User } from '../interfaces/user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string = ''

  constructor(private as: AuthService,
    private us: UserService,
    private router: Router,
    private title: Title) { 
      this.title.setTitle('Sign Up')
    }

  ngOnInit() {
  }

  signup(form) {
    let data: User = form.value
    this.as.signup(data.email, data.password)
    .then(result => {
      this.errorMessage = ''
      this.us.addNewUser(result.user.uid, data.name, data.address).then(() => {
        this.router.navigate(['/'])
      }).catch(err => console.log('fs', err))
    })
    .catch(err => {
      console.log('a', err)
      this.errorMessage = err.message
    })
  }

}
