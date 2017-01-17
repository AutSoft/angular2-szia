import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';

@Component({
    moduleId: module.id,
    selector: 'airline-list',
    templateUrl: 'airline-list.component.html'
})
export class AirlineListComponent implements OnInit {
    airlines: Airline[];

    constructor(private airlineService: AirlineService) { }

    ngOnInit() {
        this.airlineService.getAirlines().subscribe(
            (airlines) => this.airlines = airlines);
    }
}