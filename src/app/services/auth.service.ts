import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    public authenticatedUser: any = null;

    constructor(private http: HttpClient) { }

    public isAuthenticated(): boolean {

        if (this.authenticatedUser) {
            return true;
        }

        return false;
    }

    public isAdmin(): boolean {

        if (this.isAuthenticated()) {
            if (this.authenticatedUser.role == 'admin') {
                return true;
            }
        }

        return false;
    }

    public setUserInfo(user: User) {
        this.authenticatedUser = user;
    }

    public destroyUserInfo() {
        this.authenticatedUser = null;
    }

    public validate(email: String, password: String): Observable<User> {
        return this.http.post<User>(
            environment.authServiceBaseUrl + '/signin',
            { 'email': email, 'password': password }
        );
    }
}
