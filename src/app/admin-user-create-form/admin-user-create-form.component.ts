import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Message, MessageTypes } from '../message/message';

@Component({
    selector: 'app-admin-user-create-form',
    templateUrl: './admin-user-create-form.component.html',
    styleUrls: ['./admin-user-create-form.component.scss']
})
export class AdminUserCreateFormComponent implements OnInit {

    user: User = {
        id: 0,
        email: '',
        password: '',
        name: '',
        role: 'user'
    };

    @Output()
    resultMessage = new EventEmitter<Message>();

    @Output()
    newUser = new EventEmitter<User>();

    messageTypes = MessageTypes;
    message!: Message;

    constructor(private userService: UserService) { }

    ngOnInit(): void { }

    onSubmit() {
        this.userService.addUser(this.user).subscribe((result) => {
            this.newUser.emit(result.user);

            return this.resultMessage.emit(new Message(
                MessageTypes.SUCCESS,
                result.message.pt ||
                'Novo utilizador criado com sucesso.'
            ));
        }, (error) => {
            this.message = new Message(
                MessageTypes.DANGER,
                error.message.pt ||
                'Ocorreu um erro ao processor o seu pedido, por favor tente mais tarde.'
            );
        });
    }

    onCancel() {
        this.resultMessage.emit(new Message(MessageTypes.NONE, ''));
        return false;
    }

}
