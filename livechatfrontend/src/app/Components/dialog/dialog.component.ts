import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Chat} from "../../Models/chat";
import { WebsocketService } from 'src/app/Services/websocket.service';
import {BehaviorSubject, Observable} from "rxjs";
import {Dialog} from "../../Models/dialog";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public responses: string [] = []
  public messages: EventEmitter<any> = new EventEmitter();
  response: string = ""

  constructor(private route: ActivatedRoute, private websocketService: WebsocketService) { }

  ngOnInit(): void {
    
  }


  onSubmit(f: NgForm) {
    this.websocketService.SendChat(f.value)
    this.responses = this.websocketService.GetDialogs();  
  }
}
