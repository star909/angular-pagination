import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
dataCollection:Array<string> =[];
  
/**
   * @ Pagination Data : constructor
   * @ Purpose  : Creating data for pagination
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
constructor() {
    for (let i=1;i<=100;i++){
      this.dataCollection.push(`item ${i}`);
    }
   }

  ngOnInit(): void {
  }

}
