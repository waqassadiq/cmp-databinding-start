import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  newServerName = '';
  newServerContent = '';

  @ViewChild("serverNameInputWithViewChild") serverNameInputElement;

  constructor() { }

  ngOnInit(): void {
  }


  OnAddServerWithViewChild(){
    console.log("serverNameInputElement: " + this.serverNameInputElement);

    this.serverCreated.emit({
      serverName: this.serverNameInputElement.nativeElement.value,
      serverContent: this.newServerContent
    });
  }

  // using the logical reference from to set the server name here.
  onAddServerWithLogicalReference(nameInput : HTMLInputElement) {
    console.log(nameInput)
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

}
