import { Component,Output,EventEmitter, Input,OnInit } from '@angular/core';
import { CardVoteModel, ICardVoteModel } from '../../../shared/Model/cardVote.model';
import { VoteService } from '../../../api/vote.service';
@Component({
  selector: 'app-modal-report',
  templateUrl: './modal-report.component.html',
  styleUrl: './modal-report.component.scss'
})
export class ModalReportComponent implements OnInit{
  @Output() close = new EventEmitter<void>();
  @Input() cardVote!: ICardVoteModel;
  realTimeCardVote!: ICardVoteModel;
  showDescription: boolean = false;
  
  constructor(private voteService: VoteService) {
  }
  ngOnInit() {
    this.loadRealTimeCardVote();
  }
  showDescriptionToggle() {
    this.showDescription = !this.showDescription;
  }
  calculateTotalVotes() {
    return this.cardVote.options.reduce((acc, option) => acc + option.votes, 0);
  }
  calculatePercentage(votes: number) {
    return votes / this.calculateTotalVotes() * 100;
  }
  closeReportModal() {
    this.close.emit();
  }
  loadRealTimeCardVote(){
    this.voteService.getVotesById(this.cardVote.id!).subscribe((data) => {
      this.realTimeCardVote = data;
    }
    );
  }

}
