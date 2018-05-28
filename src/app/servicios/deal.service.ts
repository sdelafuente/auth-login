import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Deal } from '../deal'

@Injectable()
export class DealService {

    //Ruta de la API
    private publicDealsUrl = 'http://localhost/api.2/index.php';
    private privateDealsUrl = 'http://localhost/api.2/index.php';

    //Constructor
    constructor(private http: HttpClient) { }

    // Implement a method to get the public deals
    getPublicDeals() {
      return this.http
                .get<Deal[]>(this.publicDealsUrl + "/publicacion/")
                .pipe(
                    catchError(this.handleError)
                );
    }

    // Implement a method to get the private deals
    getPrivateDeals() {
      return this.http
        .get<Deal[]>(this.privateDealsUrl)
        .pipe(
          catchError(this.handleError)
        );
    }

    // Implement a method to handle errors if any
    private handleError(err: HttpErrorResponse | any) {
        console.error('An error occurred', err);
        return ErrorObservable.create(new Error(err.message || err));
    }

    purchase(item) {
        alert(`You bought the: ${item.name}`);
    }
}
