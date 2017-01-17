import { NgModule } from '@angular/core';
import { FlightComponent } from './flight.component';
import { CommonModule } from '@angular/common';
import { FlightRouteModule } from './flight-route.module';
import { FlightService } from './flight.service';
import { FlightListComponent } from './flight-list/flight-list.component';

@NgModule({
    imports: [CommonModule, FlightRouteModule],
    exports: [],
    declarations: [FlightComponent, FlightListComponent],
    providers: [FlightService],
})
export class FlightModule {
}
