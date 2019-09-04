import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class TrainInformationService {

    constructor(private http: HttpClient) { }

    // url = 'https://ichuxley.azurewebsites.net/lbo/to/not';
    url = 'https://ichuxley.azurewebsites.net/departures/lbo';

    getTrainInformation(): Observable<any> {
        return this.http.get(this.url,
            {
                params:
                {
                    expand: 'true'
                }
            }
        ).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // a client-side or network error has occurred
            console.log('An error has occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code
            // The response body may contain clues as to what went wrong
            console.log(`Backend returned code ${error.status},` +
                        `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad has happened; please try again later.');
    }
}
