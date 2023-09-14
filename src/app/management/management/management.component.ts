import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  rows: number[] = Array(8); // Create an array of length 8
  cols: number[] = Array(8); // Create an array of length 8
  constructor(){}
  
  ngOnInit(): void {
    
  }
}
