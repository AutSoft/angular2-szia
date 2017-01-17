import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AppRouteModule } from './app-route.module';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemorySziaService } from './mocks/szia-db';
import { AirlineModule } from './airline/airline.module';
import { BASE_PATH } from './base-path.token';

@NgModule({
    imports: [
        BrowserModule,
        Ng2BootstrapModule.forRoot(),
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemorySziaService),
        AirlineModule,
        AppRouteModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [{provide: BASE_PATH, useValue: '/app'}]
})
export class AppModule {
}
