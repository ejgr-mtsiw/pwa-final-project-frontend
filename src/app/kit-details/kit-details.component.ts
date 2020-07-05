import { Component, OnInit, Input } from '@angular/core';
import { Kit } from '../models/kit';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KitService } from '../services/kit.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-kit-details',
    templateUrl: './kit-details.component.html',
    styleUrls: ['./kit-details.component.scss']
})
export class KitDetailsComponent implements OnInit {

    kit$!: Observable<Kit>;

    selectedId: number = 0;

    constructor(
        private route: ActivatedRoute,
        private kitService: KitService) { }

    ngOnInit(): void {
        this.kit$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                let id = params.get('KitId');
                if (id) {
                    this.selectedId = +id;
                } else {
                    this.selectedId = 0;
                }

                return this.kitService.getKit(this.selectedId);
            })
        );
    }

    getPhotoUrl(): string {
        return `${environment.kitServiceBaseUrl}/${this.selectedId}/photo`;
    }
}
