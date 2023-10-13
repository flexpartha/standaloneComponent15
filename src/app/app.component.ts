import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, Subject, fromEvent, interval, takeUntil } from 'rxjs';
import { EmployeeService } from './httpServ/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
})
export class AppComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();
  title = 'standaloneComponent15';
  user:any;
  user$!: Observable<any>;

  constructor(private service:EmployeeService,public _router: Router){
    // get value with subscribe
    this.service.userSubject$.subscribe((res)=>{
      this.user = res;
      console.log(this.user);
    })
  }
  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
    console.log(this.user);
     // get value with Asyncpipe
     //this.user$ = this.service.userSubject$.asObservable();
     //console.log(this.user$)
    //  const source = interval(1000);
    //  const clicks = fromEvent(document, 'click');
    //  const result = source.pipe(takeUntil(clicks));
    //  result.subscribe(x => console.log(x));
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
