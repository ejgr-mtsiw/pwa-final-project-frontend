import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';
import { Kit } from '../models/kit';

@Component({
    selector: 'app-admin-kit-events',
    templateUrl: './admin-kit-events.component.html',
    styleUrls: ['./admin-kit-events.component.scss']
})
export class AdminKitEventsComponent implements OnInit {

    @Input()
    kit!: Kit;

    events: Event[] = [];

    constructor(private eventsService: EventsService) { }

    ngOnInit(): void {
        this.eventsService.getAllEventsForKit(this.kit).subscribe((events) => {
            this.events = events;
        });
    }

    onNewEvent(event: Event) {
        this.events.push(event);
    }
}
