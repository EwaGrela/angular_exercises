import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  enableMe = true
  serverCreationStatus = "No server was created"
  serverName = "testServer"
  initialText = ""
  serverCreated = false
  servers = ["testServer", "testServer2", "testServer3"]


  constructor() { 
    setTimeout( () =>{this.allowNewServer =true}, 2000)
    setTimeout(()=>{this.enableMe = false}, 1200)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true
    this.serverCreationStatus = `Server's name is ${this.serverName}`
    this.servers.push(this.serverName)
  }
  

  onInputChange(event){
    this.serverName = event.target.value
  }
}
