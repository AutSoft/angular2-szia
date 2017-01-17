import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationExtras } from '@angular/router';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';

@Component({
    moduleId: module.id,
    selector: 'airline-edit',
    templateUrl: 'airline-edit.component.html',
    styleUrls: ['airline-edit.component.css']
})
export class AirlineEditComponent implements OnInit {
    private airline: Airline;

    constructor(private route: ActivatedRoute, private airlineService: AirlineService, private router: Router) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.airlineService.getAirline(params['id']))
            .subscribe((airline: Airline) => this.airline = airline);
    }

    navigateBack(id?: number) {
        let navigationExtras: NavigationExtras = {relativeTo: this.route};
        if(id) {
            navigationExtras.queryParams = {id: id};
        }
        this.router.navigate(['../../'], navigationExtras);
    }

    updateAirline() {
        this.airlineService.updateAirline(this.airline).subscribe(
            () => {
                this.navigateBack(this.airline.id);
            }
        );
    }

}