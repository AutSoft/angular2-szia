import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Airline } from './airline';
import { Observable } from 'rxjs';

@Injectable()
export class AirlineService {

    constructor(private http: Http) { }

    getAirlines(): Observable<Airline[]> {
        return this.http.get('app/airlines')
            .map((response: Response) => response.json().data)
            .catch((response: Response) => {
                console.log(response);
                return Observable.throw(response);
            });
    }

}
