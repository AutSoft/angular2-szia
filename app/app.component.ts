import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default">
            <span class="navbar-brand">
                South-Zubogy International Airport
            </span>
            <ul class="nav navbar-nav pull-right">
                <li routerLinkActive="active"><a routerLink="/airlines">Airlines</a></li>
                <li routerLinkActive="active"><a routerLink="/flights">Flights</a></li>
            </ul>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
  `,
})
export class AppComponent {
}
