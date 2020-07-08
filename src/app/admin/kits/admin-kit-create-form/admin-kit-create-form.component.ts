import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Kit } from 'src/app/models/kit';
import { Message } from 'src/app/message/message';
import { MessageTypes } from 'src/app/message/message-types';
import { KitService } from 'src/app/services/kit.service';

@Component({
    selector: 'app-admin-kit-create-form',
    templateUrl: './admin-kit-create-form.component.html',
    styleUrls: ['./admin-kit-create-form.component.scss']
})
export class AdminKitCreateFormComponent implements OnInit {

    kit: Kit = {
        id: 0,
        name: '',
        location: '',
        photo: ''
    };

    @Output()
    resultMessage = new EventEmitter<Message>();

    @Output()
    newKit = new EventEmitter<Kit>();

    messageTypes = MessageTypes;
    message!: Message;

    constructor(private kitService: KitService) { }

    ngOnInit() { }

    onSubmit() {
        this.kitService.addKit(this.kit).subscribe((result) => {
            this.newKit.emit(result.kit);

            return this.resultMessage.emit(new Message(
                MessageTypes.SUCCESS,
                result.message.pt ||
                'Novo kit criado com sucesso.'
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
