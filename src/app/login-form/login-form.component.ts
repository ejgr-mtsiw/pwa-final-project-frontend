import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { MessageTypes, Message } from '../message/message';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    model = { email: '', password: '' }

    messageTypes = MessageTypes;
    message!: Message;

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
            this.message = new Message(
                MessageTypes.DANGER,
                'Os dados indicados não são válidos!'
            );
        });
    }
}
