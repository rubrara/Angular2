import { ErrorHandler, Injectable } from "@angular/core";
import { Iproduct } from "./Iproduct";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, pipe, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products/products.json'

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Iproduct[]> {
        return this.http.get<Iproduct[]>(this.productUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    handleError(err: HttpErrorResponse) {
        let errMessage = '';
        if (err.error instanceof ErrorEvent) {
            errMessage = `An error occured: ${err.error.message}`
        } else {
            errMessage = `Server sStatus Code: ${err.status}, error message is ${err.message}`;
        }

        console.error(errMessage);
        return throwError(() => errMessage);
    }

    
}