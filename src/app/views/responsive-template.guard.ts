import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveTemplateGuard implements CanLoad {
  constructor(private router:Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user = sessionStorage.getItem('user');
      if(user == 'template'){
        return true;
      }
      sessionStorage.removeItem('user');
      this.router.navigate(['/login']);
    return false;
  }
}
