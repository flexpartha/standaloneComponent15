import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminrouteguardGuard implements CanActivate {
//   constructor(private _router: Router){}
  
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       let user = sessionStorage.getItem('user');
//       if(user == 'admin'){
//         return true;
//       }
//       this._router.navigate(['login']);
//       return false;
//   }
  
// }

// FUNCTIONAL ROUTE GUARDS STARTS FROM HERE <----

export const adminRouteGuard = () =>{
  const _router = inject(Router);
  let user = sessionStorage.getItem('user');
      if(user == 'admin'){
        return true;
      }
      _router.navigate(['login']);
      return false;
}
