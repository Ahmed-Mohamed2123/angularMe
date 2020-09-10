import { AuthService } from './../auth.service';
import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthdashboardService implements CanActivate {

  constructor(private as: AuthService,
    private router: Router,
    private user: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | Observable<boolean> | Promise<boolean> {
      return new Promise(resolve => {
        this.as.user.subscribe(user => {
          if (user) {
            this.user.getUserData().subscribe(data => {
              if (data['admin']) resolve(true);
              else {
                this.router.navigate(['/'])
                resolve(false)
              }
            })
          } else {
            resolve(false)
            this.router.navigate(['/'])
          }
        })
      })      
    }
}
