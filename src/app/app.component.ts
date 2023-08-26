import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './httpServ/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
})
export class AppComponent implements OnInit {
  title = 'standaloneComponent15';
  user:any;
  user$!: Observable<any>;

  constructor(private service:EmployeeService,public _router: Router){
    // get value with subscribe
    this.service.userSubject$.subscribe((res)=>{
        this.user = res;
        console.log(res);
     })
  }
  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
    console.log(this.user);
     // get value with Asyncpipe
     //this.user$ = this.service.userSubject$.asObservable();
     //console.log(this.user$)
  }

  logout(){
   // sessionStorage.clear();
   this.service.userSubject$.next(null)
    this._router.navigate(['login'])
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
     console.log('Back button pressed');
     this.service.userSubject$.next(null)
  }
}
