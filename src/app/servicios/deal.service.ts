import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Deal } from '../deal'
// Import AuthService
import { AuthService } from 'auth.service';


/*
    1er Parcial

    Explique en que consistio el modelo burocratico de weber , a que nuevo tipo de
    autoridad dio lugar el mismo,  y determine los objetivos que perseguia y los
    principales  caracteristicas de los mismos

    Control Interno: DEfinicion, desventajas del control interno.
    elementos de un sistema de Control

    Toma de Decisiones. Contexto, objetivos y preferencias del decididor, como
    influyen en la toma de decisiones.

    Explique la direccion por Objetivos, la teoria X y la teoria Y. El analisis
    transaccional y que escuela lo desarrollo.(Psicologia)

    Mercados. Como interviene el estado en los mercados. Detallar y dar ejemplos
    de cada una de las herramientas  que utiliza.
*/

@Injectable()
export class DealService {

    //Ruta de la API
    private publicDealsUrl = 'http://localhost/api.2/index.php';
    private privateDealsUrl = 'http://localhost/api.2/index.php';

    //Constructor
    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

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
        .get<Deal[]>(this.privateDealsUrl  + "/publicacion/privadas/"", {
          headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
        })
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
        alert(`You bought the: ${item.nombre}`);
    }
}
