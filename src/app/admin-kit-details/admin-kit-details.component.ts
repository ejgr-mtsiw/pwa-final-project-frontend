import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Kit } from '../models/kit';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { KitService } from '../services/kit.service';
import { switchMap } from 'rxjs/operators';
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
