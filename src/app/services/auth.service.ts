import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private headers: HttpHeaders = new HttpHeaders(
        { 'Content-Type': 'application/json' }
    );

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
            `${environment.authServiceBaseUrl}/signin`,
            JSON.stringify({ 'email': email, 'password': password }),
            { headers: this.headers }
        );
    }

    public updatePassword(password: string) {
        return this.http.put<any>(
            `${environment.userServiceBaseUrl}/profile/update`,
            JSON.stringify({
                'id': this.authenticatedUser.id, 'password': password
            }),
            { headers: this.headers }
        );
    }
}
