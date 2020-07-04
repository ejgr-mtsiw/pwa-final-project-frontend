import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    model = { email: '', password: '' }

    errorHidden: boolean = true;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    onSubmit() {
        this.authService.validate(
            this.model.email,
            this.model.password
        ).subscribe((user) => {
            this.authService.setUserInfo(user);
            this.router.navigate(['admin/kits']);
        }, (error) => {
            this.errorHidden = false;
        });
    }
}
