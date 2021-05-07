import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  ViewChild, 
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

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: String;

  // prior to angular 8, static is not required
  @ViewChild("heading", {static: true}) header: ElementRef;

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
    console.log("header content: " + this.header.nativeElement.textContent);
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
    console.log("header content: " + this.header.nativeElement.textContent);

  }
  
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() called.")

  }

  ngOnDestroy(){
    console.log("ngOnDestroy() called.");
  }

}
