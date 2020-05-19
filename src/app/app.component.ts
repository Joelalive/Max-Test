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

  onServerAdded(serverData: { serverName: string} ) {
    console.log('Server Added');
    this.servers.push({
      name: serverData.serverName
    });
  }

}
