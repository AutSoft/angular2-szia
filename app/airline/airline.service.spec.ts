/* tslint:disable:no-unused-variable */
import {TestBed, inject, async, ComponentFixture} from '@angular/core/testing';
import { AirlineService } from './airline.service';
import { HttpModule } from "@angular/http";
import {BASE_PATH} from "../base-path.token";
import {FlightListComponent} from "../flight/flight-list/flight-list.component";

describe('AirlineService', () => {
    let fixture: ComponentFixture<FlightListComponent>;
    let airlineService: AirlineService;
    let comp: FlightListComponent;

    beforeEach(async(() => {
        let airlineServiceStub = {

        };

        TestBed.configureTestingModule({
            providers: [
                { provide: AirlineService, useValue: airlineServiceStub },
                { provide: BASE_PATH, useValue: 'BasePath' }],
            imports: [ HttpModule ],
            declarations: [FlightListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlightListComponent);
        airlineService = fixture.debugElement.injector.get(AirlineService);
        comp = fixture.componentInstance;
    });

    it('should ...', () => {
        expect(airlineService).toBeTruthy();
    });



    // it('#getValue should return real value', () => {
    //     service.getAirlines().subscribe(value => {
    //         // expect(value).toBe('observable value');
    //         console.log(value);
    //     });
    // });
});
