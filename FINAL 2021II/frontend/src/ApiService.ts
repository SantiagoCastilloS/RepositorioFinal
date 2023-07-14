import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, throwError} from "rxjs";
import {Aplicacion, Perfil, RespuestaConsulta} from "./interfaces";
import {catchError, retry} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class ApiService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})};

  constructor(private http: HttpClient) {
  }

  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  obtenerReporte(): Observable<RespuestaConsulta> {
    return this.http.post<RespuestaConsulta>('http://localhost:8080/obtenerReporte"', null, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  registrarAplicacion(data: Aplicacion): Observable<Aplicacion> {
    return this.http.post<Aplicacion>('http://localhost:8080/registrarAplicacion', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  actualizarIndicadorPerfil(data: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>('http://localhost:8080/actualizarIndicadorPerfil', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

}
