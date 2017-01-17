import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="page-header">
            <h1>SZIA
                <small>South-Zubogy International Airport</small>
            </h1>
        </div>
        <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
