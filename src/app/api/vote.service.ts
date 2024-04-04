import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ICardVoteModel} from "../shared/Model/cardVote.model";
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class VoteService {
  apiUrl = 'https://localhost:7137';

  constructor(private http: HttpClient) { }
  getVotesById(Id:string): Observable<ICardVoteModel> {
    // console.log(`${this.apiUrl}/${Id}`);
    
    return this.http.get<ICardVoteModel>(`${this.apiUrl}/vote/${Id}`).pipe(
      catchError(this.handleError)
    );
  }
  getVotesPaganation(page: number,limit: number): Observable<ICardVoteModel[]> {

    
    return this.http.get<ICardVoteModel[]>(`${this.apiUrl}/vote?page=${page}&pageSize=${limit}`);
  }
  createVote(vote: ICardVoteModel): Observable<ICardVoteModel> {
    return this.http.post<ICardVoteModel>(`${this.apiUrl}/vote`, { ...vote,id:"" });
  }

  updateVote(data:{
    id: string;
    optionIndex: number;
  }
    ): Observable<string> {
      console.log(data);
      
    return this.http.put<string>(`${this.apiUrl}/vote/updateVote`,data,{responseType: 'text' as 'json'});
  }
  private handleError(error: HttpErrorResponse) {
    // You can customize this further based on how you want to handle different types of errors
    console.error(`Backend returned code ${error.status}, body was: `, error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
