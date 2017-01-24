import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default">
            <span class="navbar-brand">
                {{title}}
            </span>
            <ul *ngIf="authService.isLoggedIn" class="nav navbar-nav pull-right">
                <li routerLinkActive="active"><a routerLink="/airlines">Airlines</a></li>
                <li routerLinkActive="active"><a routerLink="/flights">Flights</a></li>
                <li><button class="btn btn-default navbar-btn" (click)="logOut()">Log out</button></li>
            </ul>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
  `,
})
export class AppComponent {

    // TODO tesztelhetőbb ha változó
    title = "South-Zubogy International Airport";

    constructor(private router: Router, private authService: AuthService) {}

    logOut() {
        this.authService.logOut().subscribe(
            () => this.router.navigate(['/login'])
        );
    }
}
