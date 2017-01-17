import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'flight',
    template: `
        <h1>Flights</h1>
        <router-outlet></router-outlet>
    `
})
export class FlightComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
