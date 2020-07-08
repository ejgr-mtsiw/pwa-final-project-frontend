import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { MessageTypes, Message } from '../message/message';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

    public user: User;
    public newPassword: string = '';

    messageTypes = MessageTypes;
    message!: Message;

    constructor(private authService: AuthService) {
        this.user = this.authService.authenticatedUser;
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.authService.updatePassword(this.newPassword).subscribe((result) => {
            this.message = new Message(
                MessageTypes.SUCCESS,
                result.message.pt ||
                'Password alterada com sucesso.'
            );
        }, (error) => {
            this.message = new Message(
                MessageTypes.DANGER,
                error.message.pt ||
                'Ocorreu um erro ao processar o seu pedido. Por favor tente mais tarde.'
            );
        });
    }
}
