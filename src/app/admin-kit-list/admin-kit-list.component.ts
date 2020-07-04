import { Component, OnInit } from '@angular/core';

import { Kit } from '../models/kit';
import { KitService } from '../services/kit.service';

import { Message } from '../messages/message';

@Component({
    selector: 'app-admin-kit-list',
    templateUrl: './admin-kit-list.component.html',
    styleUrls: ['./admin-kit-list.component.scss']
})
export class AdminKitListComponent implements OnInit {

    kits: Kit[] = [];
    selectedKit: Kit = this.kits[0];

    message: Message = new Message(true, '', '');

    editFormVisible: boolean = false;
    createFormVisible: boolean = false;

    constructor(private kitService: KitService) { }

    ngOnInit(): void {
        this.getKits();
    }

    getKits(): void {
        this.kitService.getKits().subscribe((kits) => (this.kits = kits));
    }

    onNewKit(kit: Kit) {
        this.kits.push(kit);
    }

    onResultMessage(message: Message) {
        this.editFormVisible = false;
        this.createFormVisible = false;
        this.message = message;
    }

    onEditKitClick(kit: Kit): void {
        this.selectedKit = kit;
        this.message.hidden = true;
        this.editFormVisible = true;
    }

    onCreateKitClick(): void {
        this.message.hidden = true;
        this.createFormVisible = true;
    }
}
