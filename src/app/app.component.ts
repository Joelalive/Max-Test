import { Server } from './server.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'max-test';

  servers: Server[] = [
    new Server('Dummy Server')
  ];

  newServer = 'Server Name';

  addServer(serverName) {
    console.log('Server Added');
    this.servers.push({
      name: serverName.value
    });
    this.newServer = serverName.value;
  }

  removeServer(index) {
    this.servers.splice(index, 1);
  }


}
