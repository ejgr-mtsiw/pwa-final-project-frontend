import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { KitService } from '../services/kit.service';
import { Kit } from '../models/kit';
import { Message } from '../messages/message';

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

    message: Message = new Message(true, '', '');

    constructor(private kitService: KitService) { }

    ngOnInit() { }

    onSubmit() {
        this.message.hidden = true;

        this.kitService.updateKit(this.kit).subscribe((result) => {
            return this.resultMessage.emit(new Message(
                false,
                'success',
                result.message.pt ||
                'Os dados do kit foram atualizados.'
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
        this.message.hidden = true;
        this.resultMessage.emit(new Message(true, '', ''));
        return false;
    }
}
