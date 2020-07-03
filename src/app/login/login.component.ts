import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    userEmail: String = '';
    userPassword: String = '';

    submitted = false;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    onSubmit() {
        this.submitted = true;
    }

    login() {
        this.authService.validate(
            this.userEmail,
            this.userPassword
        ).subscribe(user => {
            this.authService.setUserInfo(user);
            this.router.navigate(['/']);
        });
    }
}
