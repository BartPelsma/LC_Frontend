import { EventEmitter, Injectable, NgZone } from '@angular/core';
import {webSocket} from "rxjs/webSocket";
import {Observable, Observer} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Chat } from '../Models/chat';
import { Dialog } from '../Models/dialog';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: WebSocket;

  // public websocket = webSocket('ws://127.0.0.1:8088/myserver')
  response: string = ""

  public messages: EventEmitter<any> = new EventEmitter();
  public responses: string[] = [];


  constructor(private httpClient: HttpClient, private _zone : NgZone) { 

    this.socket = new WebSocket('ws://127.0.0.1:8088/myserver');

    this.socket.onmessage = (event) => {
      console.log('WebSocket message received: ', event.data);
      this.messages.emit(event.data)

      this.response = event.data
      this.responses.push(this.response)

      // console.log(this.responses)
    };

  }

  // SendChat(message: string) {
  //   this.websocket.subscribe()
  //   this.websocket.next(message)
  //   return
  // }

  SendChat(message: string) {
    this.socket.send(JSON.stringify(message));
  }

  GetDialogs(){
    return this.responses
  }
}
