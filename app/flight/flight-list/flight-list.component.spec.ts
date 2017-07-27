/* tslint:disable:no-unused-variable */
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs';
import {FlightListComponent} from './flight-list.component';
import {FlightService} from '../flight.service';
import {BASE_PATH} from '../../base-path.token';
import {Component} from '@angular/core';
import {Flight} from '../flight';

@Component({
    selector: 'flight-add',
    template: '<div></div>'
})
class FlightAddComponent {

}

describe('Flight list component', () => {
    let fixture: ComponentFixture<FlightListComponent>;
    let flightService: FlightService;
    let comp: FlightListComponent;
    let getFlightsSpy: jasmine.Spy;
    const flights: Flight[] = [
        {
            'flightNumber': 'LY 8045',
            'departure': 'South Zubogy International Airport',
            'arrival': 'Heatrow Airport',
            'departureCity': 'South Zubogy',
            'departureCode': 'SZU',
            'arrivalCity': 'London',
            'arrivalCode': 'LHR',
            'departureTime': new Date(),
            'arrivalTime': new Date(),
            'status': 'Boarding',
            'checkinDeskNumber': 17,
            'gateNumber': 22,
            'delay': 0,
            'comment': 'El Al',
            'id': 1,
            'airlineId': 2
        },
        {
            'flightNumber': 'LH 0676',
            'departure': 'Frankfurt International Airport',
            'arrival': 'South Zubogy International Airport',
            'departureCity': 'Frankfurt',
            'departureCode': 'FRA',
            'arrivalCity': 'South Zubogy',
            'arrivalCode': 'SZU',
            'departureTime': new Date(),
            'arrivalTime': new Date(),
            'status': 'Delayed',
            'checkinDeskNumber': 16,
            'gateNumber': 23,
            'delay': 30,
            'comment': 'Lufthansa',
            'id': 2,
            'airlineId': 3
        },
        {
            'flightNumber': 'AL 4157',
            'departure': 'South Zubogy International Airport',
            'arrival': 'Sheremetyevo International Airport',
            'departureCity': 'South Zubogy',
            'departureCode': 'SZU',
            'arrivalCity': 'Moscow',
            'arrivalCode': 'SVU',
            'departureTime': new Date(),
            'arrivalTime': new Date(),
            'status': 'Departing',
            'checkinDeskNumber': 8,
            'gateNumber': 1,
            'delay': 30,
            'comment': 'Aeroloft',
            'id': 3,
            'airlineId': 2
        }];

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            providers: [
                FlightService,
                { provide: BASE_PATH, useValue: 'BasePath' }],
            imports: [ HttpModule, RouterTestingModule ],
            declarations: [FlightListComponent, FlightAddComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlightListComponent);
        flightService = fixture.debugElement.injector.get(FlightService);
        comp = fixture.componentInstance;

        getFlightsSpy = spyOn(flightService, 'getFlights')
            .and.returnValue(Observable.of(flights));
    });

    it('létre kell hoznia a service-t', () => {
        expect(flightService).toBeTruthy();
    });

    it('le kell kérdeznie a fligh-okat', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(comp.flights).toBe(flights);
            expect(comp.flights.length).toEqual(3);
        });
    });

    it('ellenőrizze az érkezőket', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(comp.isArriving(flights[0])).toBeFalsy();
            expect(comp.isArriving(flights[1])).toBeTruthy();
            expect(comp.isArriving(flights[2])).toBeFalsy();
        });
    });

    it('adjon hozzá új flight-ot', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            comp.addFlight(flights[0]);
            expect(comp.flights.length).toEqual(4);
        });
    });
});
