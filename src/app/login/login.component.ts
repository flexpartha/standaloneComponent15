import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../httpServ/employee.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  username:any;
  password:any;

  constructor(private router:Router,private service:EmployeeService, private cd:ChangeDetectorRef){};

  ngOnInit(){
    sessionStorage.clear();
  }
  handleLoginClick(){
    if(this.username && this.password){
      this.authenticateUser(this.username);
    } else {
      alert('enter username and password');
    }
  }

  authenticateUser(userName: string){
    sessionStorage.setItem('user',userName);
    this.service.userSubject$.next(userName)
    if(userName == "admin"){
      this.router.navigate(['/admin']);
    } else if(userName == "manager"){ 
      this.router.navigate(['/manage']);
    } else if(userName == "general"){
      this.router.navigate(['/general'])
    }
  }
}
