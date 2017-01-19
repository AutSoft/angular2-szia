import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationExtras } from '@angular/router';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { CanComponentDeactivate } from '../../deactivate-guard.service';

@Component({
    moduleId: module.id,
    selector: 'airline-edit',
    templateUrl: 'airline-edit.component.html',
    styleUrls: ['airline-edit.component.css']
})
export class AirlineEditComponent implements OnInit, CanComponentDeactivate {
    airline: Airline;
    showNoNavigateMessage = false;
    private inputAirline: Airline;

    constructor(private route: ActivatedRoute,
        private airlineService: AirlineService,
        private router: Router,) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.airlineService.getAirline(params['id']))
            .subscribe((airline: Airline) => {
                this.airline = airline;
                this.inputAirline = Object.assign({}, this.airline);
            });
    }

    canDeactivate(): boolean {
        if(this.airline && this.inputAirline && (this.airline.airlineCode != this.inputAirline.airlineCode
            || this.airline.name != this.inputAirline.name)) {
            this.showNoNavigateMessage = true;
            return false;
        }
        else {
            return true;
        }
    }

    navigateBack(id?: number) {
        let navigationExtras: NavigationExtras = {relativeTo: this.route};
        this.inputAirline = null;
        if(id) {
            navigationExtras.queryParams = {id: id};
        }
        this.router.navigate(['../'], navigationExtras);
    }

    updateAirline() {
        this.airlineService.updateAirline(this.airline).subscribe(
            () => {
                this.inputAirline = null;
                this.showNoNavigateMessage = false;
                this.navigateBack(this.airline.id);
            }
        );
    }

}