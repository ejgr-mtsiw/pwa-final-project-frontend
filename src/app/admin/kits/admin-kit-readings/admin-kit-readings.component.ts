import { Component, OnInit, Input } from '@angular/core';
import { Kit } from 'src/app/models/kit';
import { Reading } from 'src/app/models/reading';
import { ReadingsService } from 'src/app/services/readings.service';

@Component({
    selector: 'app-admin-kit-readings',
    templateUrl: './admin-kit-readings.component.html',
    styleUrls: ['./admin-kit-readings.component.scss']
})
export class AdminKitReadingsComponent implements OnInit {

    @Input()
    kit!: Kit;

    readings: Reading[] = [];

    constructor(private readingsService: ReadingsService) { }

    ngOnInit(): void {
        this.readingsService.getAllReadingsForKit(this.kit).subscribe((readings) => {
            this.readings = readings;
        });
    }
}
