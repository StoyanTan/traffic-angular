import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Incident } from '../shared/incident';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { KeyValue } from './keyvalue';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  // Define API
  url = "http://localhost:8080/service/traffic";

  result: {
    count: number,
    incidents: Incident[]
  }
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getIncidents(city: string, page: number) {
    return this.http.get<any>(this.url + "/city/" + city +"?page=" + page);
  }

  getClustering() {
    return this.http.get<{ children: KeyValue[]; }>(this.url);
  }

  getIncidentById(id: string) {
    return this.http.get<Incident>(this.url + "/city/incidents/" + id);
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}