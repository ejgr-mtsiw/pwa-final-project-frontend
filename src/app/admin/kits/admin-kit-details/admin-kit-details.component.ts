import { Component, OnInit } from '@angular/core';
import { Kit } from 'src/app/models/kit';
import { ActivatedRoute } from '@angular/router';
import { KitService } from 'src/app/services/kit.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-admin-kit-details',
    templateUrl: './admin-kit-details.component.html',
    styleUrls: ['./admin-kit-details.component.scss']
})
export class AdminKitDetailsComponent implements OnInit {

    kit!: Kit;

    constructor(
        private route: ActivatedRoute,
        private kitService: KitService) { }

    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('KitId');
        let kitId: number = 0;
        if (id) {
            kitId = +id;
        }

        this.kitService.getKit(kitId).subscribe((kit) => {
            this.kit = kit;
        });
    }

    getPhotoUrl(): string {
        return `${environment.kitServiceBaseUrl}/${this.kit.id}/photo`;
    }

}
