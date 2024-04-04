import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICardVoteModel} from "../shared/Model/cardVote.model";
@Injectable({
  providedIn: 'root'
})

export class VoteService {
  apiUrl = 'http://localhost:5234';

  constructor(private http: HttpClient) { }
  getVotesById(Id:string): Observable<ICardVoteModel[]> {
    return this.http.get<ICardVoteModel[]>(`${this.apiUrl}/${Id}`);
  }
  getVotesPaganation(page: number,limit: number): Observable<ICardVoteModel[]> {
    return this.http.get<ICardVoteModel[]>(`${this.apiUrl}/vote?page=${page}&limit=${limit}`);
  }
  createVote(vote: ICardVoteModel): Observable<ICardVoteModel> {
    return this.http.post<ICardVoteModel>(`${this.apiUrl}/vote`, vote);
  }
}
