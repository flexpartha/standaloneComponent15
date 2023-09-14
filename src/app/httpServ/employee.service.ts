import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iemployee } from '../model/employee';
import { DomSanitizer } from '@angular/platform-browser';

const apiUrl = "https://api.angularbootcamp.com/employees";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public userSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _http:HttpClient, private sanitizer:DomSanitizer) { }

  getAllEmpoyees():Observable<Iemployee[]>{
    return this._http.get<Iemployee[]>(apiUrl);
  }

  getUser(user:any){
    console.log(user);
    this.userSubject$.next(user);
  }

  // Prevent cross-site scripting (XSS)
  
  getSafeHtml(html:string){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  getsafeURL(URL:string){
    return this.sanitizer.bypassSecurityTrustUrl(URL);
  }
  getsafeResoueceURL(URL:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL);
  }
}
