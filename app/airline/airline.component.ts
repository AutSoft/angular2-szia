import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'airline',
    template: `
        <h1>Airlines</h1>
        <router-outlet></router-outlet>
    `
})
export class AirlineComponent implements OnInit {

    constructor() { }

    ngOnInit() {}

}
