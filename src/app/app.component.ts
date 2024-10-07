import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnChanges{
  title = 'dashbaord';
  sidebarData:any;

  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
   if (changes['sidebarData']?.currentValue) {
    console.log(changes['sidebarData']?.currentValue)
   }
  }

  ngOnInit(): void {
    console.log('hi sam ')
  }

}
