import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlineService } from './airline.service';
import { AirlineComponent } from './airline.component';
import { AirlineRouteModule } from './airline-route.module';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirlineEditComponent } from './airline-edit/airline-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
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
