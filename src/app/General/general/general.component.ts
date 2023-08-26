import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicCompComponent } from './Dynamic/dynamic-comp/dynamic-comp.component';
import { SafeHtml } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/httpServ/employee.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  safeValue!: SafeHtml;
  @ViewChild('dynamic', { read:ViewContainerRef }) viewRef1: any;

  constructor(private viewRef: ViewContainerRef, private secure:EmployeeService){
    //@ViewChild('dynamic', { read: ViewContainerRef })
  }

  ngOnInit(): void {
    
  }

  showDynamicComponent(): void {
    //this.viewRef.clear();
    this.viewRef.createComponent(DynamicCompComponent);
  }

  removeDynamicComponent(): void {
    this.viewRef.clear();
  }

  getXSSValue(){
    this.safeValue = this.secure.getSafeHtml("<h1>Sanitization Success</h1>")
  }
}
