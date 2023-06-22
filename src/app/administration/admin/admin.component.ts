import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Iemployee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/httpServ/employee.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  employeeList:Iemployee[] =[];

  constructor(private employeeLstServ:EmployeeService){}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList(){
    this.employeeLstServ.getAllEmpoyees().subscribe((emp)=>{
      this.employeeList = emp;
      console.log("this.employeeList######",this.employeeList);
    })
  }
}
