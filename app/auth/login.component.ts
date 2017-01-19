import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { }

    logIn(username: string, password: string) {
        this.authService.logIn(username, password).subscribe(() => {}, () => {});
    }
}
