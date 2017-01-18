import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './flight.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';

const routes: Routes = [
    {
        path: '',
        component: FlightComponent,
        children: [
            {
                path: '',
                component: FlightListComponent,
            },
            {
                path: ':id',
                component: FlightDetailComponent
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
