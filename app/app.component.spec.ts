import { AppComponent } from './app.component';
import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpModule } from "@angular/http";
import {BASE_PATH} from "./base-path.token";
import {AuthService} from "./auth/auth.service";

describe('AppComponent', function() {
    let de: DebugElement;
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        let authServiceStub = {};

        TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useValue: authServiceStub },
                { provide: BASE_PATH, useValue: 'BasePath' }
            ],
            imports: [ RouterTestingModule, HttpModule ],
            declarations: [AppComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('span.navbar-brand'));
        el = de.nativeElement;
    });

    it('létrehoz egy komponenst', () => expect(comp).toBeDefined());

    it('létre kellett hoznia egy <span>-t, regexp-pel teszteljük', () => {
        fixture.detectChanges();
        expect(el.innerText).toMatch(/airport/i);
    });

    it('a <span> szövege a komponens title változója kell legyen', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('ha módosítjuk a title változót, teszteljük újra a tartalmat', () => {
        let newTitle: string = 'Test Title';
        comp.title = newTitle;
        // a módosítást csak akkor veszi észre, ha meghívjuk ezt a fv-t
        fixture.detectChanges();
        expect(el.textContent).toContain(newTitle);
    });
});
