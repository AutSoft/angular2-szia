import { NgModule } from '@angular/core';
import { AirlineComponent } from './airline.component';
import { RouterModule } from '@angular/router';
import { AirlineListComponent } from './airline-list/airline-list.component';

const routes = [
    {
        path: '',
        component: AirlineComponent,
        children: [
            {
                path: '',
                component: AirlineListComponent
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
export class AirlineRouteModule {
}
