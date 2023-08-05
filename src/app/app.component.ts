import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './httpServ/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'standaloneComponent15';

  constructor(private service:EmployeeService,private _router: Router){}
  user:any;
  user$!: Observable<any>;
  ngOnInit(): void {
    // this.user = sessionStorage.getItem('user');
     // get value with Asyncpipe
     this.user$ = this.service.userSubject$.asObservable();


     // get value with subscribe
    //  this.service.userSubject$.subscribe((res)=>{
    //   this.user$ = res;
    //   console.log(res)
    //  })
  }

  logout(){
   // sessionStorage.clear();
   this.service.userSubject$.next(null)
    this._router.navigate(['login'])
  }
}
