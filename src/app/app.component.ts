import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'just a test'}];

  onServeradded(serverDate: {serverName: string, serverContent: string} ) {
    this.serverElements.push({
      type: 'server',
      name: serverDate.serverName,
      content: serverDate.serverContent
    });
  }

  onBlueprintAdded(serverDate: {serverName: string, serverContent: string} ) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverDate.serverName,
      content: serverDate.serverContent
    });
  }

}
