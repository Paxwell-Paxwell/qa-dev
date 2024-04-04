import {Component, OnInit} from '@angular/core';
import {CardVoteModel, ICardVoteModel} from "../shared/Model/cardVote.model";
import {VoteService} from "../api/vote.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  cardVotes :ICardVoteModel[] = [];
  private _page: number = 1;
  showPrevButton: boolean = false;
  showNextButton: boolean = true;
  constructor(private voteService: VoteService) {
  }
  ngOnInit() {
    this.loadVotePagination(1, 5);
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
    this.loadVotePagination(this._page, 5);
    // Perform any additional actions here, similar to what you'd do in useEffect
  }
  loadVotePagination(page: number, limit: number){
    this.voteService.getVotesPaganation(page, limit).subscribe((data) => {
      this.cardVotes = data
      // console.log(data);
      this.updatePaginationButtons();
    });
  }
  nextPage(){
    this.page++;

    
  }
  prevPage(){
    this.page--;
    
  }
  private updatePaginationButtons() {

    this.showPrevButton = this.page > 1;
    this.showNextButton = this.cardVotes.length === 5;
  }
}
