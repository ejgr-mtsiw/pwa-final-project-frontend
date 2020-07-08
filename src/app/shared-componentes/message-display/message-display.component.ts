import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/message/message';
import { MessageTypes } from 'src/app/message/message-types';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements OnInit {

  @Input()
  message!: Message;

  messageTypes = MessageTypes;

  constructor() { }

  ngOnInit(): void {
  }

}
