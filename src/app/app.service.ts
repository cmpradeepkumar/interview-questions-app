import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators'
import { InterviewQuestion } from './model/interview-question.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  hostUrl: string = 'http://localhost:8090/';
  constructor(private http: HttpClient) { }

  getAllIQs(): Observable<InterviewQuestion[]>{
    let apiUrl = this.hostUrl + 'getAllIAndQ';
    // console.log(apiUrl);
    return this.http.get<InterviewQuestion[]>(apiUrl).pipe(
      map(res => {
        return res;
      })
    );
  }
}
