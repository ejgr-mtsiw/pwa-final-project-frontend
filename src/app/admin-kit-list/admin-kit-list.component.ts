import { Component, OnInit } from '@angular/core';

import { Kit } from '../models/kit';
import { KitService } from '../services/kit.service';

@Component({
    selector: 'app-admin-kit-list',
    templateUrl: './admin-kit-list.component.html',
    styleUrls: ['./admin-kit-list.component.scss']
})
export class AdminKitListComponent implements OnInit {

    public kits: Kit[] = [];

    constructor(private kitService: KitService) { }

    ngOnInit(): void {
        this.getKits();
    }

    getKits(): void {
        this.kitService.getKits().subscribe((kits) => (this.kits = kits));
    }

}
