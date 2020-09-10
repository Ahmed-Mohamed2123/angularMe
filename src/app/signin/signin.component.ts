import { User } from '../interfaces/user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  notUserMessage = false

  constructor(private as: AuthService,
    private title: Title) { 
      this.title.setTitle('Sign In')
    }

  ngOnInit() {
  }

  signin(form) {
    let data: User = form.value
    this.as.signin(data.email, data.password).then((result:any) => {
      console.log('UserId',result.user.uid);
      localStorage.setItem('uid',result.user.uid);
    }
      ).catch(() => {
      form.reset();
      this.notUserMessage = true;
    })
  }

}
