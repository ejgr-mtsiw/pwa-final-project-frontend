import { Component, OnInit, Input } from '@angular/core';
import { Kit } from 'src/app/models/kit';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/event';

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
