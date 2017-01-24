import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AppRouteModule } from './app-route.module';
import { HttpModule } from '@angular/http';
import { AirlineModule } from './airline/airline.module';
import { BASE_PATH } from './base-path.token';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login.component';
import { DeactivateGuardService } from './deactivate-guard.service';
// import {InMemoryWebApiModule} from "angular-in-memory-web-api";
// import {InMemorySziaService} from "./mocks/szia-db";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        // csak ha a mock db-t akarom használni
        //InMemoryWebApiModule.forRoot(InMemorySziaService),
        Ng2BootstrapModule.forRoot(),
        AirlineModule,
        AppRouteModule
    ],
    declarations: [AppComponent, LoginComponent],
    bootstrap: [AppComponent],
    // '/app' kell ha a mock db-t akarom
    providers: [{provide: BASE_PATH, useValue: '/api'}, AuthService, AuthGuardService, DeactivateGuardService]
})
export class AppModule {
}
