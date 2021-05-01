import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Emulated, Native. 
})
export class ServerItemComponent implements OnInit {

  @Input("srvElement") element: {type: string, name: string, content: string};


  constructor() { }

  ngOnInit(): void {
  }

  

}
