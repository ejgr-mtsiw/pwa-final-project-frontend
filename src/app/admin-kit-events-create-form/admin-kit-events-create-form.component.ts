import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Event } from '../models/event';
import { MessageTypes, Message } from '../message/message';
import { EventsService } from '../services/events.service';
import { Kit } from '../models/kit';
import * as moment from 'moment';
import { AuthService } from '../services/auth.service';

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
        UserId: 0,
        date: '',
        description: '',
        details: ''
    };

    messageTypes = MessageTypes;
    message!: Message;

    constructor(private eventService: EventsService, private authService: AuthService) { }

    ngOnInit(): void { }

    onSubmit() {
        this.event.date = moment().format();
        this.event.KitId = this.kit.id;
        this.event.UserId = this.authService.authenticatedUser.id;

        this.eventService.addEvent(this.event).subscribe((result) => {
            this.event.description = '';
            this.event.details = '';

            result.event.User = this.authService.authenticatedUser;

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
