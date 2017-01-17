import { NgModule } from '@angular/core';
import { AirlineComponent } from './airline.component';
import { RouterModule } from '@angular/router';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirlineEditComponent } from './airline-edit/airline-edit.component';

const routes = [
    {
        path: 'airlines',
        component: AirlineComponent,
        children: [
            {
                path: '',
                component: AirlineListComponent,
                children: [
                    {
                        path: 'edit/:id',
                        component: AirlineEditComponent
                    }
                ]
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