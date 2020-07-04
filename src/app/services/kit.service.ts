import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Kit } from '../models/kit';

@Injectable({
    providedIn: 'root',
})

export class KitService {
    private headers: HttpHeaders = new HttpHeaders(
        { 'Content-Type': 'application/json' }
    );

    constructor(private http: HttpClient) { }

    getKits(): Observable<Kit[]> {
        return this.http.get<Kit[]>(environment.kitServiceBaseUrl);
    }

    addKit(kit: Kit): Observable<any> {
        return this.http.post(environment.kitServiceBaseUrl + '/create',
            JSON.stringify(kit),
            {
                headers: this.headers
            }
        );
    }

    updateKit(kit: Kit): Observable<any> {
        return this.http.put(environment.kitServiceBaseUrl + `/${kit.id}/update`,
            JSON.stringify(kit),
            {
                headers: this.headers
            }
        );
    }
}
