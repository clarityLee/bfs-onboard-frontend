import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('username ', localStorage.getItem('username'));
      // console.log('route ', route);
      console.log('state ', state.url);
      if(localStorage.getItem('username')!==null){
        var roleFromLocal = localStorage.getItem('role');
        const role = roleFromLocal !== null ? roleFromLocal : '';
        var url = state.url;
        if(url.indexOf(role)!==-1)
          return true;
        else if(role === 'hr'){
          this.router.navigate(['/hr/home']);
        }
        else{
          this.router.navigate(['/employee/home']);
        }
        return false;
      }
      else{
        this.router.navigate(['/']);
        return false;
      }
        
  }
  
}
