import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string }>();

  constructor() { }

  ngOnInit() {
  }

  addServer(newServer) {
    this.serverCreated.emit(
      {serverName: newServer.value}
    );
  }



}
