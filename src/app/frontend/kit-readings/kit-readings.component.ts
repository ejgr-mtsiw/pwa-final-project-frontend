import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Reading } from 'src/app/models/reading';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ReadingsService } from 'src/app/services/readings.service';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-kit-readings',
    templateUrl: './kit-readings.component.html',
    styleUrls: ['./kit-readings.component.scss']
})
export class KitReadingsComponent implements OnInit {

    kitId: number = 0;

    readings$!: Observable<Reading[]>;

    constructor(private route: ActivatedRoute, private readingsService: ReadingsService) { }

    ngOnInit(): void {
        this.readings$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                let id = params.get('KitId');
                if (id) {
                    this.kitId = +id;
                } else {
                    this.kitId = 0;
                }
                return this.readingsService.getAllReadingsForKitId(this.kitId);
            })
        );
    }
}
