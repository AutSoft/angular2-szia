import { NgModule } from '@angular/core';
import { AirlineService } from './airline.service';
import { AirlineComponent } from './airline.component';
import { AirlineRouteModule } from './airline-route.module';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirlineEditComponent } from './airline-edit/airline-edit.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        AirlineRouteModule
    ],
    declarations: [
        AirlineComponent,
        AirlineListComponent,
        AirlineEditComponent
    ],
    providers: [AirlineService]
})
export class AirlineModule {
}
