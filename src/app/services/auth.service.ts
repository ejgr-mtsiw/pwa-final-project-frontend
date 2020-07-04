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

        return this.loadUserData();
    }

    public isAdmin(): boolean {

        if (this.isAuthenticated()) {
            if (this.authenticatedUser.role == 'admin') {
                return true;
            }
        }

        return false;
    }

    private loadUserData(): boolean {

        let userData = localStorage.getItem('userInfo');
        if (userData) {
            let user: User = JSON.parse(userData);
            if (user) {
                this.authenticatedUser = user;
                return true;
            }
        }

        return false;
    }

    public setUserInfo(user: User) {
        this.authenticatedUser = user;
        localStorage.setItem('userInfo', JSON.stringify(user));
    }

    public destroyUserInfo() {
        this.authenticatedUser = null;
        localStorage.removeItem('userInfo');
    }

    public validate(email: String, password: String): Observable<User> {
        return this.http.post<User>(
            environment.authServiceBaseUrl + '/signin',
            { 'email': email, 'password': password }
        );
    }
}
