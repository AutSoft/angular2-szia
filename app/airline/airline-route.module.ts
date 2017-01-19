import { NgModule } from '@angular/core';
import { AirlineComponent } from './airline.component';
import { RouterModule } from '@angular/router';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirlineEditComponent } from './airline-edit/airline-edit.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { DeactivateGuardService } from '../deactivate-guard.service';

const routes = [
    {
        path: 'airlines',
        component: AirlineComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: AirlineListComponent,
                children: [
                    {
                        path: 'edit/:id',
                        component: AirlineEditComponent,
                        canDeactivate: [DeactivateGuardService]
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
