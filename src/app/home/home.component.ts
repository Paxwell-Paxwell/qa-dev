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
  constructor(private voteService: VoteService) {
  }
  ngOnInit() {
    this.loadVotePaganation(1, 10);
    console.log();
  }

  loadVotePaganation(page: number, limit: number){
    this.voteService.getVotesPaganation(page, limit).subscribe((data) => {
      this.cardVotes = data
    });
  }
  
}
