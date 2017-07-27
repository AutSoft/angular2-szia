import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';

const routes = [
    {
        path: '',
        redirectTo: '/airlines',
        pathMatch: 'full'
    },
    {
        path: 'flights',
        loadChildren: 'app/flight/flight.module#FlightModule'
    },
    {
        path: 'airlines',
        loadChildren: 'app/airline/airline.module#AirlineModule'
    },
    {
        path: 'login',
        component: LoginComponent
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
