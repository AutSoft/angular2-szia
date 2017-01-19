import { NgModule } from '@angular/core';
import { FlightComponent } from './flight.component';
import { FlightRouteModule } from './flight-route.module';
import { FlightService } from './flight.service';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightAddComponent } from './flight-add/flight-add.component';
import { AirlineModule } from '../airline/airline.module';
import { CustomFormsModule } from 'ng2-validation';
import { ModalModule } from 'ng2-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        CustomFormsModule,
        AirlineModule,
        ModalModule,
        FlightRouteModule
    ],
    exports: [],
    declarations: [
        FlightComponent,
        FlightListComponent,
        FlightDetailComponent,
        FlightAddComponent
    ],
    providers: [FlightService],
})
export class FlightModule {
}
