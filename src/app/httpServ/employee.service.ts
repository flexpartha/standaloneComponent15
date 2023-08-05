import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iemployee } from '../model/employee';

const apiUrl = "https://api.angularbootcamp.com/employees";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public userSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _http:HttpClient) { }

  getAllEmpoyees():Observable<Iemployee[]>{
    return this._http.get<Iemployee[]>(apiUrl);
  }

  getUser(user:any){
    console.log(user);
    this.userSubject$.next(user);
  }
}
