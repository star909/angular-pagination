import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})


export class PaginationComponent implements OnInit {
  @Input() collection : string[];  /**Data to be displayed */
  p: number = 1; /**Current Page number */
  constructor() { }

  ngOnInit(): void {
  }
 
}
