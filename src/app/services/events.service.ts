import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kit } from '../models/kit';
import { Event } from '../models/event';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private headers: HttpHeaders = new HttpHeaders(
        { 'Content-Type': 'application/json' }
    );

    constructor(private http: HttpClient) { }

    getAllEventsForKit(kit: Kit): Observable<Event[]> {
        return this.getAllEventsForKitId(kit.id);
    }

    getAllEventsForKitId(kitId: number): Observable<Event[]> {
        return this.http.get<Event[]>(
            `${environment.eventsServiceBaseUrl}/${kitId}/events`
        );
    }

    addEvent(event: Event) {
        return this.http.post<any>(
            `${environment.eventsServiceBaseUrl}/${event.KitId}/events/create`,
            JSON.stringify(event),
            {
                headers: this.headers
            }
        )
    }
}
