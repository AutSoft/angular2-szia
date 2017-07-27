import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import {LoginComponent} from './login.component';
import {AuthService} from './auth.service';
import {BASE_PATH} from '../base-path.token';
import {Observable} from 'rxjs';

describe('LoginComponent', function() {
    let fixture: ComponentFixture<LoginComponent>;
    let authService: AuthService;
    let loginSpy: jasmine.Spy;
    let spy: jasmine.Spy;
    let comp: LoginComponent;

    beforeEach(async(() => {
        // ne az éles service-t teszteljük
        // igy a token minden tesztnél undefined lesz
        // függetlenek a tesztek
        let authServiceStub = {
            // mind1 mi van itt, mert a logIn-t a callFake-kel ugyis felülírjuk
            logIn: function(a: string, b: string){}
        };

        TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useValue: authServiceStub },
                { provide: BASE_PATH, useValue: 'BasePath' }
            ],
            imports: [ RouterTestingModule, HttpModule ],
            declarations: [LoginComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        comp = fixture.componentInstance;
        authService = fixture.debugElement.injector.get(AuthService);

        // imitáljunk egy aszinkron fv hívást
        loginSpy = spyOn(authService, 'logIn')
            .and.callFake(function() {
                let result = Promise.resolve({id: 'teszt'});
                result.then (
                    function(data) {
                        authService.token = data.id;
                    }
                );
                return Observable.of(result);
            });

        spy = spyOn(comp, 'logIn')
            .and.callThrough();
    });

    it('login meghívódott-e, de aszinkron, ezért eredmény még nem biztos hogy van', () => {
        fixture.detectChanges();
        expect(loginSpy.calls.any()).toBe(false);
        authService.logIn('test', 'user');
        expect(loginSpy).toHaveBeenCalled();
        // nincs meg az eredmény
        expect(authService.token).toBeFalsy();
    });

    it('login meghívódott, megvárjuk az eredményt 1', async(() => {
        fixture.detectChanges();
        authService.logIn('test', 'user');
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(authService.token).toBeTruthy();
            expect(authService.token).toEqual('teszt');
        });
        // egyszer futott
        expect(loginSpy).toHaveBeenCalledTimes(1);
        // az adott paraméterekkel futott
        expect(loginSpy).toHaveBeenCalledWith('test', 'user');
    }));

    it('login meghívódott, megvárjuk az eredményt 2', fakeAsync(() => {
        fixture.detectChanges();
        expect(authService.token).toBeUndefined();
        authService.logIn('test', 'user');
        tick();                  // wait for async login
        fixture.detectChanges(); // update view with quote
        expect(authService.token).toBeTruthy();
        expect(authService.token).toEqual('teszt');
    }));

    it('meg kell hívni a komponens login-jét is', async(() => {
        fixture.detectChanges();
        comp.logIn('test', 'user');
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(authService.token).toBeTruthy();
            expect(authService.token).toEqual('teszt');
        });
        // mind2 egyszer futott
        expect(loginSpy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledTimes(1);
        // az adott paraméterekkel futott
        expect(spy).toHaveBeenCalledWith('test', 'user');
    }));
});
