import { 
  Component, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges, 
  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Emulated, Native. 
})
export class ServerItemComponent implements OnInit, OnChanges {

  @Input("srvElement") element: {type: string, name: string, content: string};
  @Input() name: String;

  constructor() {
    console.log("constructor() called...");
    this.name = "initial"
   }

   ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges() called.");
    console.log(changes);
   }

  ngOnInit(): void {
    console.log("ngOnInit() called");
  }

  

}
