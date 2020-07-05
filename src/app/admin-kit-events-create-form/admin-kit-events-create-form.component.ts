import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Event } from '../models/event';
import { MessageTypes, Message } from '../message/message';
import { EventsService } from '../services/events.service';
import { Kit } from '../models/kit';
import * as moment from 'moment';

@Component({
    selector: 'app-admin-kit-events-create-form',
    templateUrl: './admin-kit-events-create-form.component.html',
    styleUrls: ['./admin-kit-events-create-form.component.scss']
})
export class AdminKitEventsCreateFormComponent implements OnInit {

    @Input()
    kit!: Kit;

    @Output()
    newEvent = new EventEmitter<Event>();

    event: Event = {
        id: 0,
        KitId: 0,
        date: '',
        description: '',
        details: ''
    };

    messageTypes = MessageTypes;
    message!: Message;

    constructor(private eventService: EventsService) { }

    ngOnInit(): void {
        this.event.KitId = this.kit.id;
    }

    onSubmit() {
        this.event.date = moment().format();

        this.eventService.addEvent(this.event).subscribe((result) => {
            this.event.description = '';
            this.event.details = '';

            return this.newEvent.emit(result.event);
        }, (error) => {
            this.message = new Message(
                MessageTypes.DANGER,
                error.message.pt ||
                'Ocorreu um erro ao processor o seu pedido, por favor tente mais tarde.'
            );
        });
    }
}
