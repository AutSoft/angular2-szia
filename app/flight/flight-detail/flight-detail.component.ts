import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
    moduleId: module.id,
    selector: 'flight-detail',
    templateUrl: 'flight-detail.component.html'
})
export class FlightDetailComponent implements OnInit {
    private flight: Flight;

    constructor(private route: ActivatedRoute, private router: Router, private flightService: FlightService) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.flightService.getFlightDetails(+params['id']))
            .subscribe(flight => this.flight = flight);
    }

    goBack() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

}