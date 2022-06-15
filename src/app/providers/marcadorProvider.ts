import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { listaMarcadores } from "../interfaces/listaMarcadores";
import { environment } from "src/environments/environment";
import { listaMarcador } from "../interfaces/listaMarcador";

@Injectable({
    providedIn: 'root'
})
export class marcadorProvider {
    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.log("algo fallo : " + error.message);
        } else {
            console.log("Status code : " + error.status);
            console.log(error);
        }
        return throwError(() => new Error(error.error));
    }
    getMarcadores(): Observable<listaMarcador> {
        const url = environment.urlProfe;
        return this.http.get<listaMarcador>(url).pipe(catchError(this.handleError));
    }
    // getAll(): Observable<listaMarcador[]> {
    //     const url = environment.urlProfe;
    //     return this.http.get<listaMarcador[]>(url).pipe(catchError(this.handleError));
    // }

}