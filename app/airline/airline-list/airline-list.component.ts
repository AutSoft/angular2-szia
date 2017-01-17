import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'airline-list',
    templateUrl: 'airline-list.component.html',
    styleUrls: ['airline-list.component.css']
})
export class AirlineListComponent implements OnInit {
    airlines: Airline[];

    constructor(private airlineService: AirlineService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.airlineService.getAirlines().subscribe(
            (airlines) => this.airlines = airlines);
        this.route.queryParams
            .subscribe((params: Params) => {
                if(params['id']) {
                    this.airlineService.getAirline(+params['id'])
                        .subscribe((airline: Airline) => {
                            let index = this.airlines.findIndex(a => a.id === airline.id);
                            this.airlines[index] = airline;
                        });
                }
            })
    }

    startEditing(airline: Airline) {
        this.router.navigate(['./edit', airline.id], {relativeTo: this.route});
    }
}