import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Kit } from 'src/app/models/kit';
import { Message } from 'src/app/message/message';
import { MessageTypes } from 'src/app/message/message-types';
import { KitService } from 'src/app/services/kit.service';

@Component({
    selector: 'app-admin-kit-edit-form',
    templateUrl: './admin-kit-edit-form.component.html',
    styleUrls: ['./admin-kit-edit-form.component.scss']
})
export class AdminKitEditFormComponent implements OnInit {

    @Input()
    kit!: Kit;

    @Output()
    resultMessage = new EventEmitter<Message>();

    messageTypes = MessageTypes;
    message!: Message;

    constructor(private kitService: KitService) { }

    ngOnInit() { }

    onSubmit() {
        this.kitService.updateKit(this.kit).subscribe((result) => {
            return this.resultMessage.emit(new Message(
                MessageTypes.SUCCESS,
                result.message.pt ||
                'Os dados do kit foram atualizados.'
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
