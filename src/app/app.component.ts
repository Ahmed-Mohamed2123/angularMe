import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animate', [
      transition('0 => 1, 1 => 0, 1 => 2, 2 => 1, 0 => 2, 2 => 0', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)'
            }),
            animate(500, style({
              transform: 'translateX(0)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate(500, style({
              transform: 'translateX(-100%)'
            }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  
  constructor(
    private usersService:UserService
  ) {
    this.usersService.getUser()
  }
}
