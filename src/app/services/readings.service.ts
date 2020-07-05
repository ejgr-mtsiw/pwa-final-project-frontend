import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Kit } from '../models/kit';
import { Reading } from '../models/reading';


@Injectable({
    providedIn: 'root'
})
export class ReadingsService {

    constructor(private http: HttpClient) { }

    getAllReadingsForKit(kit: Kit): Observable<Reading[]> {
        return this.getAllReadingsForKitId(kit.id);
    }

    getAllReadingsForKitId(kitId: number): Observable<Reading[]> {
        return this.http.get<Reading[]>(
            `${environment.readingsServiceBaseUrl}/${kitId}/readings`
        );
    }
}
