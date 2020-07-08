import { Component, OnInit } from '@angular/core';

import { Kit } from 'src/app/models/kit';
import { KitService } from 'src/app/services/kit.service';

@Component({
    selector: 'app-main-menu-kit-list',
    templateUrl: './main-menu-kit-list.component.html',
    styleUrls: ['./main-menu-kit-list.component.scss']
})
export class MainMenuKitListComponent implements OnInit {

    public kits: Kit[] = [];

    constructor(private kitService: KitService) { }

    ngOnInit(): void {
        this.getKits();
    }

    getKits(): void {
        this.kitService.getKits().subscribe((kits) => {
            this.kits = kits;
        });
    }

}
