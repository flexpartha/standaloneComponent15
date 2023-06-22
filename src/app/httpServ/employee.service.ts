import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployee } from '../model/employee';

const apiUrl = "https://api.angularbootcamp.com/employees";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

  getAllEmpoyees():Observable<Iemployee[]>{
    return this._http.get<Iemployee[]>(apiUrl);
  }
}
