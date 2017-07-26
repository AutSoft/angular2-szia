import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BASE_PATH } from '../base-path.token';

@Injectable()
export class AuthService {
    token: string;
    redirectUrl: string;

    constructor(private http: Http, @Inject(BASE_PATH) private basePath: string, private router: Router) { }

    logIn(username: string, password: string) {
        return this.http.post(this.basePath + '/SziaUsers/login', {
            username: username,
            password: password
        })
            .map((response: Response) => {
                let data = response.json().data || response.json();
                this.token = data.id;
                this.router.navigateByUrl(this.redirectUrl ? this.redirectUrl : '/airlines');
                return this.token;
            })
            .catch(response => {
                console.log(response);
                return Observable.throw(response);
            });
    }

    logOut() {
        let requestOptions = new RequestOptions(
            {headers: new Headers({'authorization': this.token})});

        return this.http.post(this.basePath + '/SziaUsers/logout', null, requestOptions)
            .map(() => this.token = null)
            .catch(response => {
                console.log(response);
                return Observable.throw(response);
            });
    }

    get isLoggedIn() {
        return this.token != null;
    }

}
