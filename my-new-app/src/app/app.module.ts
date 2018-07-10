import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MessagesComponent } from './messages/messages.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MessagesComponent,
    ErrorMsgComponent,
    SuccessMsgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
