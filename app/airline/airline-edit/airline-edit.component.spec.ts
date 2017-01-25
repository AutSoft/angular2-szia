/* tslint:disable:no-unused-variable */
import {TestBed, async, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import { HttpModule } from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {Observable} from "rxjs";
import {AirlineEditComponent} from "./airline-edit.component";
import {AirlineService} from "../airline.service";
import {BASE_PATH} from "../../base-path.token";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

describe('Airline-edit component', () => {
    let fixture: ComponentFixture<AirlineEditComponent>;
    let airlineService: AirlineService;
    let comp: AirlineEditComponent;
    let getAirlineSpy: jasmine.Spy;
    let page: Page;
    const airline = {
        'imageUrl': 'http://www.brandsoftheworld.com/sites/default/files' +
        '/styles/logo-thumbnail/public/042014/untitled-1_74.png?itok=eHy19j2Z',
        'name': 'WizzAir',
        'airlineCode': 'WIZZ',
        'id': 1
    };

    class Page {
        okSpy: jasmine.Spy;

        okBtn: DebugElement;
        nameInput: HTMLInputElement;
        codeInput: HTMLInputElement;

        constructor() {
            this.okSpy = spyOn(comp, 'updateAirline')
        }

        addPageElements() {
            if (comp.airline) {
                this.okBtn   = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
                this.nameInput = fixture.debugElement.query(By.css('#name')).nativeElement;
                this.codeInput = fixture.debugElement.query(By.css('#code')).nativeElement;
            }
        }
    }

    function createComponent() {
        fixture = TestBed.createComponent(AirlineEditComponent);
        comp    = fixture.componentInstance;
        page    = new Page();

        airlineService = fixture.debugElement.injector.get(AirlineService);

        getAirlineSpy = spyOn(airlineService, 'getAirline')
            .and.returnValue(Observable.of(airline));

        fixture.detectChanges();
        return fixture.whenStable().then(() => {
            fixture.detectChanges();
            page.addPageElements();
        });
    }

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            providers: [
                AirlineService,
                { provide: BASE_PATH, useValue: 'BasePath' }],
            imports: [ HttpModule, RouterTestingModule, FormsModule ],
            declarations: [AirlineEditComponent]
        }).compileComponents().then(() => {
            createComponent();
        });
    }));

    it('meg kell jelenítenie a nevet és a kódot', () => {
        expect(page.nameInput.value).toBe(airline.name);
        expect(page.codeInput.value).toBe(airline.airlineCode);
    });

    it('meg kell nyomnia a mentés gombot', fakeAsync(() => {
        expect(page.nameInput.value).toBe(airline.name);
        (page.okBtn as any).click();
        tick();
        fixture.detectChanges();
        expect(page.okSpy).toHaveBeenCalled();
        expect(page.okSpy).toHaveBeenCalledTimes(1);
    }));
});
