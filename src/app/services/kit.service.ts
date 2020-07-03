import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Kit } from '../models/kit';

@Injectable({
    providedIn: 'root',
})

export class KitService {
    constructor(private http: HttpClient) { }

    getKits(): Observable<Kit[]> {
        return this.http.get<Kit[]>(environment.kitServiceBaseUrl);
    }
}
