import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'flight-list',
    templateUrl: 'flight-list.component.html',
    styleUrls: ['flight-list.component.css']
})
export class FlightListComponent implements OnInit {
    private flights: Flight[];

    constructor(private flightService: FlightService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.flightService.getFlights().subscribe(
            flights => this.flights = flights
        );
    }

    isArriving(flight: Flight) {
        return flight.arrivalCode == 'SZU';
    }

    goToFlightDetails(flight: Flight) {
        this.router.navigate([flight.id], {relativeTo: this.route})
    }

}