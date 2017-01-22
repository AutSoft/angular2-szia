import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightStatus } from '../flight-status';
import { AirlineService } from '../../airline/airline.service';
import { Airline } from '../../airline/airline';
import { CustomValidators } from 'ng2-validation';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'flight-add',
    templateUrl: 'flight-add.component.html',
    styleUrls: ['flight-add.component.css']
})
export class FlightAddComponent implements OnInit {
    form: FormGroup;
    submitted = false;
    statuses: FlightStatus[] = Object.keys(FlightStatus)
        .filter(key => !isNaN(parseInt(key)))
        .map(status => FlightStatus[status]);
    airlines: Airline[];
    minCheckinGateNumber = 1;
    maxCheckinGateNumber = 50;
    minGateNumber = 1;
    maxGateNumber = 25;
    minDepartureDate = new Date();
    @ViewChild('modal') modal: ModalDirective;
    @Output() flightAdd = new EventEmitter<Flight>();

    constructor(private airlineService: AirlineService, private flightService: FlightService) {
        this.form = new FormGroup({
            flightNumber: new FormControl(null, Validators.required),
            departureTime: new FormControl(null, Validators.required),
            arrivalTime: new FormControl(null, Validators.required),
            departure: new FormControl(null, Validators.required),
            arrival: new FormControl(null, Validators.required),
            status: new FormControl(null, Validators.required),
            checkinDeskNumber: new FormControl(null, [Validators.required, CustomValidators.range([this.minCheckinGateNumber, this.maxCheckinGateNumber])]),
            gateNumber: new FormControl(null, [Validators.required, CustomValidators.range([this.minGateNumber, this.maxGateNumber])]),
            delay: new FormControl(null, CustomValidators.min(0)),
            comment: new FormControl(null),
            airlineId: new FormControl(null, Validators.required)
        });
        this.init();
    }

    private init() {
        let flight: Flight = {
            flightNumber: null,
            departureTime: new Date(),
            arrivalTime: new Date(),
            departure: null,
            arrival: null,
            status: null,
            checkinDeskNumber: null,
            gateNumber: null,
            delay: 0,
            comment: null,
            airlineId: null
        };
        this.form.setValue(flight);
    }

    ngOnInit() {
        this.airlineService.getAirlines().subscribe(
            airlines => this.airlines = airlines
        );
    }

    save() {
        this.submitted = true;
        if(this.form.invalid) return;
        this.flightService.postFlight(this.form.value as Flight).subscribe(
            flight => {
                this.flightAdd.emit(flight);
                this.modal.hide();
                this.init();
                this.submitted = false;
            }
        );
    }

}