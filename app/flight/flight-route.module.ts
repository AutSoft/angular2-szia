import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './flight.component';
import { FlightListComponent } from './flight-list/flight-list.component';

const routes: Routes = [
    {
        path: '',
        component: FlightComponent,
        children: [
            {
                path: '',
                component: FlightListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class FlightRouteModule {
}
