import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { BASE_PATH } from '../base-path.token';
import { Flight } from './flight';

@Injectable()
export class FlightService {

    constructor(private http: Http, @Inject(BASE_PATH) private basePath: string) { }

    getFlights(): Observable<Flight[]> {
        return this.http.get(this.basePath + '/flights')
            .map((response: Response) => {
                let data = response.json();
                return data.data || data;
            })
            .catch((response: Response) => {
                console.log(response);
                return Observable.throw(response);
            });
    }

    getFlightDetails(id: number): Observable<Flight> {
        return this.http.get(this.basePath + '/flights/' + id)
            .map((response: Response) => {
                let data = response.json();
                return data.data || data;
            })
            .catch((response: Response) => {
                console.log(response);
                return Observable.throw(response);
            });
    }

    postFlight(flight: Flight): Observable<Flight> {
        let requestOptions: RequestOptionsArgs = {
            headers: new Headers({'content-type': 'application/json'})
        };

        return this.http.post(this.basePath + '/flights', flight, requestOptions)
            .map((response: Response) => {
                let data = response.json();
                return data.data || data;
            })
            .catch((response: Response) => {
                console.log(response);
                return Observable.throw(response);
            });
    }

}
