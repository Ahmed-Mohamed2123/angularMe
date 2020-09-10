import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthsignService implements CanActivate{

  constructor(private as: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | Observable<boolean> | Promise<boolean>  {
    return new Promise(resolve => {
      this.as.user.subscribe(user => {
        if (user) {
          resolve(false)
          this.router.navigate(['/'])
        }
        else {
          resolve(true)
        }
      })
    })
  }
}
