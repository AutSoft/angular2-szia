import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path: 'flights',
        loadChildren: 'app/flight/flight.module#FlightModule'
    },
    {
        path: '',
        redirectTo: '/airlines',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRouteModule {
}
