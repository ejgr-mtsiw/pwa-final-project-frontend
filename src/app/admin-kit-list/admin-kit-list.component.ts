import { Component, OnInit } from '@angular/core';

import { Kit } from '../models/kit';
import { KitService } from '../services/kit.service';

import { Message, MessageTypes } from '../message/message';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
    selector: 'app-admin-kit-list',
    templateUrl: './admin-kit-list.component.html',
    styleUrls: ['./admin-kit-list.component.scss']
})
export class AdminKitListComponent implements OnInit {

    kits: Kit[] = [];
    selectedKit: Kit = this.kits[0];

    messageTypes = MessageTypes;
    message!: Message;

    createFormVisible: boolean = false;
    editFormVisible: boolean = false;

    private LIST_CLASS_SMALL: string = 'col-md-6';
    private LIST_CLASS_LONG: string = 'col-md-12';
    listClass: string = this.LIST_CLASS_LONG;

    constructor(private kitService: KitService, private modalService: NgbModal) { }

    ngOnInit(): void {
        this.getKits();
    }

    showEditForm(): void {
        this.listClass = this.LIST_CLASS_SMALL;

        this.createFormVisible = false;
        this.editFormVisible = true;
    }

    hideEditForm(): void {
        this.editFormVisible = false;
        this.listClass = this.LIST_CLASS_LONG;
    }

    showCreateForm(): void {
        this.listClass = this.LIST_CLASS_SMALL;

        this.editFormVisible = false;
        this.createFormVisible = true;
    }

    hideCreateForm(): void {
        this.createFormVisible = false;
        this.listClass = this.LIST_CLASS_LONG;
    }

    getKits(): void {
        this.kitService.getKits().subscribe((kits) => { this.kits = kits });
    }

    onNewKit(kit: Kit): void {
        this.kits.push(kit);
    }

    onResultMessage(message: Message): void {
        this.hideCreateForm();
        this.hideEditForm();

        this.message = message;
    }

    onEditKitClick(kit: Kit): void {
        this.selectedKit = kit;
        this.showEditForm();
    }

    onCreateKitClick(): void {
        this.showCreateForm();
    }

    onDeleteKitClick(kit: Kit): void {
        const modalRef = this.modalService.open(ModalContentComponent);
        modalRef.componentInstance.title = 'Remover ' + kit.name;
        modalRef.componentInstance.content = `
            <p>Tem a certeza que deseja remover o kit ${kit.name}</p>
            <p>${kit.location}?</p>`;
        modalRef.componentInstance.okButtonText = 'Eliminar o kit ' + kit.name;

        modalRef.result.then(
            (closedReason) => {
                this.kitService.deleteKit(kit).subscribe((result) => {
                    if (result.status == 200) {
                        let index: number = this.kits.indexOf(kit, 0);
                        this.kits.splice(index, 1);

                        this.message = new Message(
                            MessageTypes.SUCCESS,
                            result.message.pt
                        );
                    } else {
                        this.message = new Message(
                            MessageTypes.DANGER,
                            result.message.pt
                        );
                    }
                });
            },
            (dismissedReason) => {
            }
        );
    }
}
