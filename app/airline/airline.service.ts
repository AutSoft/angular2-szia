import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { Airline } from './airline';
import { Observable } from 'rxjs';
import { BASE_PATH } from '../base-path.token';

@Injectable()
export class AirlineService {

    constructor(private http: Http, @Inject(BASE_PATH) private basePath: string) { }

    getAirlines(): Observable<Airline[]> {
        return this.http.get(this.basePath + '/airlines')
            .map((response: Response) => {
                let data = response.json();
                return data.data || data;
            })
            .catch((response: Response) => {
                console.log(response);
                return Observable.throw(response);
            });
    }

    getAirline(id: number): Observable<Airline> {
        return this.http.get(this.basePath + '/airlines/' + id)
            .map((response: Response) => {
                let data = response.json();
                return data.data || data;
            })
            .catch((response: Response) => {
                console.log(response);
                return Observable.throw(response);
            });
    }

    updateAirline(airline: Airline): Observable<Airline> {
          return this.http.put(this.basePath + '/airlines/' + airline.id, airline)
            .catch((response: Response) => {
                console.log(response);
                return Observable.throw(response);
            });
    }

}
