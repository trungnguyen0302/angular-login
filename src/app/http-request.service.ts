import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class HttpRequestService {
    constructor(private http: Http) {
    }

    public postJson<T>(object: any, url: string): Observable<T> {       
        const body = JSON.stringify(object);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .pipe(
                map((response) => this.parseResponse(response)),
                catchError((err) => this.handleError(err))
            );
    }

    public getJson<T>(url: string): Observable<T> {        
        return this.http.get(url)
            .pipe(
                map((response) => this.parseResponse(response)),
                catchError((err) => this.handleError(err))
            );
            
    }

    private parseResponse(response: Response) {
        const body = response.json();        
        return body;
    }

    private handleError(error: any) {
        const body = error.json();
        return Observable.throw(body);
    }
}