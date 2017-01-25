/* tslint:disable:no-unused-variable */
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AirlineService } from './airline.service';
import { HttpModule } from "@angular/http";
import {BASE_PATH} from "../base-path.token";
import {AirlineListComponent} from "./airline-list/airline-list.component";
import {RouterTestingModule} from "@angular/router/testing";
import {Observable} from "rxjs";

describe('AirlineService', () => {
    let fixture: ComponentFixture<AirlineListComponent>;
    let airlineService: AirlineService;
    let comp: AirlineListComponent;
    let getAirlinesSpy: jasmine.Spy;
    let getAirlineSpy: jasmine.Spy;
    const airlines = [
        {
            'imageUrl': 'http://www.brandsoftheworld.com/sites/default/files' +
            '/styles/logo-thumbnail/public/042014/untitled-1_74.png?itok=eHy19j2Z',
            'name': 'WizzAir',
            'airlineCode': 'WIZZ',
            'id': 1
        },
        {
            'imageUrl': 'http://www.team.aero/files/company_logos/ElAl_logo.png',
            'name': 'El Al',
            'airlineCode': 'ELAL',
            'id': 2
        },
        {
            'imageUrl': 'http://www.elmatar.com/images/compagnies/logos/logo-lufthansa.jpg',
            'name': 'Lufthansa',
            'airlineCode': 'LUFT',
            'id': 3
        }
    ];
    const airline = {
        'imageUrl': 'http://www.brandsoftheworld.com/sites/default/files' +
        '/styles/logo-thumbnail/public/042014/untitled-1_74.png?itok=eHy19j2Z',
        'name': 'WizzAir',
        'airlineCode': 'WIZZ',
        'id': 1
    };

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            providers: [
                AirlineService,
                { provide: BASE_PATH, useValue: 'BasePath' }],
            imports: [ HttpModule, RouterTestingModule ],
            declarations: [AirlineListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AirlineListComponent);
        airlineService = fixture.debugElement.injector.get(AirlineService);
        comp = fixture.componentInstance;

        getAirlinesSpy = spyOn(airlineService, 'getAirlines')
            .and.returnValue(Observable.of(airlines));

        getAirlineSpy = spyOn(airlineService, 'getAirline')
            .and.returnValue(Observable.of(airline));
    });

    it('létre kell hoznia a service-t', () => {
        expect(airlineService).toBeTruthy();
    });

    it('ngInit-nek is meg kell hívnia egyszer', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(getAirlinesSpy).toHaveBeenCalledTimes(1);
            expect(getAirlinesSpy).toHaveBeenCalled();
        });
    });

    it('le kell kérnie a mock airline listát', () => {
        // nincs detectChanges hívás, ngInit nem hívta meg
        expect(getAirlinesSpy.calls.any()).toBe(false);
        airlineService.getAirlines().subscribe(result => {
            expect(result).toBeDefined();
            expect(result).toBe(airlines);
            expect(result.length).toEqual(3);
        });
        expect(getAirlinesSpy).toHaveBeenCalled();
    });

    it('le kell kérnie az adott id-jú airline-okat', () => {
        airlineService.getAirline(1).subscribe(result => {
            expect(result).toBeDefined();
            expect(result).toBe(airline);
            expect(result.id).toEqual(airline.id);
            expect(result.imageUrl).toEqual(airline.imageUrl);
            expect(result.name).toEqual(airline.name);
            expect(result.airlineCode).toEqual(airline.airlineCode);
        });
        // hiába más az id ugyanaz a mock
        airlineService.getAirline(2).subscribe(result => {
            expect(result).toBeDefined();
            expect(result).toBe(airline);
            expect(result.id).toEqual(airline.id);
            expect(result.imageUrl).toEqual(airline.imageUrl);
            expect(result.name).toEqual(airline.name);
            expect(result.airlineCode).toEqual(airline.airlineCode);
        });
        expect(getAirlineSpy).toHaveBeenCalled();
        // valőban kétszer futott
        expect(getAirlineSpy).toHaveBeenCalledTimes(2);
        // az adott paraméterekkel futott
        expect(getAirlineSpy).toHaveBeenCalledWith(1);
        expect(getAirlineSpy).toHaveBeenCalledWith(2);
    });
});
