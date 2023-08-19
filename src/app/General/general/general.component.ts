import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicCompComponent } from './Dynamic/dynamic-comp/dynamic-comp.component';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  @ViewChild('dynamic', { read:ViewContainerRef }) viewRef1!: ViewContainerRef;

  constructor(private viewRef: ViewContainerRef){
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
}
