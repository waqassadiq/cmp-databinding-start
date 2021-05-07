import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Emulated, Native. 
})
export class ServerItemComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

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

  ngDoCheck(){
    console.log("ngDoCheck() called")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit() called.")
  }
  
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() called.")

  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit() called.")
  }
  
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() called.")

  }

  ngOnDestroy(){
    console.log("ngOnDestroy() called.");
  }

}
