import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private headers: HttpHeaders = new HttpHeaders(
        { 'Content-Type': 'application/json' }
    );

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(
            environment.userServiceBaseUrl
        );
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(
            `${environment.userServiceBaseUrl}/${id}`
        );
    }

    addUser(user: User): Observable<any> {
        return this.http.post(`${environment.userServiceBaseUrl}/create`,
            JSON.stringify(user),
            {
                headers: this.headers
            }
        );
    }

    updateUser(user: User): Observable<any> {
        return this.http.put(
            `${environment.userServiceBaseUrl}/${user.id}/update`,
            JSON.stringify(user),
            {
                headers: this.headers
            }
        );
    }

    deleteUser(user: User): Observable<any> {
        return this.http.delete(
            `${environment.userServiceBaseUrl}/${user.id}/delete`
        );
    }
}
