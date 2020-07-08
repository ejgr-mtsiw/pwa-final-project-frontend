import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { Message, MessageTypes } from '../message/message';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-admin-user-edit-form',
    templateUrl: './admin-user-edit-form.component.html',
    styleUrls: ['./admin-user-edit-form.component.scss']
})
export class AdminUserEditFormComponent implements OnInit {

    @Input()
    user!: User;

    @Output()
    resultMessage = new EventEmitter<Message>();

    messageTypes = MessageTypes;
    message!: Message;

    constructor(private userService: UserService) { }

    ngOnInit(): void { }

    onSubmit() {
        this.userService.updateUser(this.user).subscribe((result) => {
            return this.resultMessage.emit(new Message(
                MessageTypes.SUCCESS,
                result.message.pt ||
                'Os dados do utilizador foram atualizados.'
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
