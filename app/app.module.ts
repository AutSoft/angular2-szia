import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AppRouteModule } from './app-route.module';
import { HttpModule } from '@angular/http';
import { BASE_PATH } from './base-path.token';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login.component';
import { DeactivateGuardService } from './deactivate-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        Ng2BootstrapModule.forRoot(),
        AppRouteModule
    ],
    declarations: [AppComponent, LoginComponent],
    bootstrap: [AppComponent],
    providers: [{provide: BASE_PATH, useValue: '/api'}, AuthService, AuthGuardService, DeactivateGuardService]
})
export class AppModule {
}
