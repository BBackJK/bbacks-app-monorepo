import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiBaseService<T> {

  constructor(
    private http: HttpClient,
  ) {}

  private defaultHttpHeader: HttpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json' });

  readList(url: string, operation: string, params?: HttpParams): Observable<T[]> {
    return this.http.get<T[]>(url, { headers: this.defaultHttpHeader, params })
      .pipe(
        tap(_ => console.log(_)),
        catchError(this.handleError<T[]>(`${operation}`, []))
      );
  }

  readOne(url: string, operation: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { headers: this.defaultHttpHeader, params} )
      .pipe(
        tap(_ => console.log(_)),
        catchError(this.handleError<T>(`${operation}`))
      );
  }

  update(url: string, payload: T, operation: string): Observable<T> {
    return this.http.put<T>(url, payload, { headers: this.defaultHttpHeader })
    .pipe(
      tap(_ => console.log(_)),
      catchError(this.handleError<T>(`${operation}`))
    );
  }

  create(url: string, payload: T, operation: string): Observable<T> {
    return this.http.post<T>(url, payload, { headers: this.defaultHttpHeader })
    .pipe(
      tap( (created: T) => console.log(created)),
      catchError(this.handleError<T>(`${operation}`))
    );
  }

  delete(url: string, operation: string): Observable<T> {
    return this.http.delete<T>(url, { headers: this.defaultHttpHeader })
    .pipe(
      tap(_ => console.log(_)),
      catchError(this.handleError<T>(`${operation}`))
    );
  }

  deleteAll(url: string, payloadIds: number[], operation: string): Observable<T> {
    return this.http.patch<T>(url, payloadIds, { headers: this.defaultHttpHeader })
    .pipe(
      tap(_ => console.log(_)),
      catchError(this.handleError<T>(`${operation}`))
    )
  }

  private handleError<T>(operation: string = 'operation', result? : T) {
    return (error: any): Observable<T> => {

      console.log(error);

      console.log(result);

      return of(result as T);
    }
  }
};