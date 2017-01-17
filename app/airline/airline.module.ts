import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlineService } from './airline.service';
import { AirlineComponent } from './airline.component';
import { AirlineRouteModule } from './airline-route.module';
import { AirlineListComponent } from './airline-list/airline-list.component';

@NgModule({
    imports: [
        CommonModule,
        AirlineRouteModule
    ],
    declarations: [
        AirlineComponent,
        AirlineListComponent
    ],
    providers: [AirlineService]
})
export class AirlineModule {
}
