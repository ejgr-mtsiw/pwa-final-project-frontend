import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { KitService } from '../services/kit.service';
import { Kit } from '../models/kit';
import { Message } from '../messages/message';

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

    message: Message = new Message(true, '', '');

    constructor(private kitService: KitService) { }

    ngOnInit() { }

    onSubmit() {
        this.message.hidden = true;

        this.kitService.addKit(this.kit).subscribe((result) => {
            this.newKit.emit(this.kit);

            return this.resultMessage.emit(new Message(
                false,
                'success',
                result.message.pt ||
                'Novo kit criado com sucesso.'
            ));
        }, (error) => {
            this.message = new Message(
                false,
                'danger',
                error.message.pt ||
                'Ocorreu um erro ao processor o seu pedido, por favor tente mais tarde.'
            );
        });
    }

    onCancel() {
        this.resultMessage.emit(new Message(true, '', ''));
        this.message.hidden = true;
        return false;
    }

}
