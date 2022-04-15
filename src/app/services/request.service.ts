import { TaskService } from './task.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TypeFormStructure } from '../interfaces/TypeFormStructure';
import { HelperData } from '../interfaces/HelperData';
import { TypeFormAPIResponse } from '../interfaces/TypeFormAPIResponse';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  data: TypeFormAPIResponse;
  priorityIndex: number;
  timeFactorIndex: number;
  priority: number;
  timeFactor: number;
  result: HelperData;

  constructor(private http: HttpClient, private taskService: TaskService) {}

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization:
        'Bearer <personal access token>',
    }),
  };

  private url = 'https://api.typeform.com/forms/H81Mb7nu/responses';
  private urlForDeletion = this.url + '?included_response_ids=';

  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    console.log(message);
  }

  getQuizResponse(): Observable<any> {
    return this.http
      .get(this.url, this.httpOptions)
      .pipe(catchError(this.handleError('getQuizResponse')));
  }

  deleteResponse(id: string): void {
    this.http.delete(this.urlForDeletion + id, this.httpOptions).subscribe({
      next: (data) => {
        console.log(data + 'Delete successful');
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getQuizResponses(index: number): void {
    this.getQuizResponse().subscribe((data) => {
      this.data = data;
      console.log(data);
      this.priorityIndex = this.data.items[0].variables.findIndex(
        (v: TypeFormStructure) => v.key === 'priority'
      );
      this.priority = this.data.items[0].variables[this.priorityIndex].number;
      this.timeFactorIndex = this.data.items[0].variables.findIndex(
        (v: TypeFormStructure) => v.key === 'timefactor'
      );
      this.timeFactor =
        this.data.items[0].variables[this.timeFactorIndex].number;
      this.taskService.update(index, this.timeFactor, this.priority);
      this.deleteResponse(this.data.items[0].response_id);
    });
  }
}
