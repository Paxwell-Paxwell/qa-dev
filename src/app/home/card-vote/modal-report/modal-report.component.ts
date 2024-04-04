import { Component,Output,EventEmitter, Input,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { CardVoteModel, ICardVoteModel } from '../../../shared/Model/cardVote.model';
import { VoteService } from '../../../api/vote.service';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-modal-report',
  templateUrl: './modal-report.component.html',
  styleUrl: './modal-report.component.scss'
})
export class ModalReportComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Input() cardVote!: ICardVoteModel;
  realTimeCardVote: ICardVoteModel|undefined;
  showDescription: boolean = false;
  isLoading: boolean = false;

  
  constructor(private voteService: VoteService) {
  }
  async ngOnInit() {
    this.isLoading = true;
    this.realTimeCardVote = await lastValueFrom(this.voteService.getVotesById(this.cardVote.id!))
    this.isLoading = false;
  }

  showDescriptionToggle() {
    this.showDescription = !this.showDescription;
  }
  calculateTotalVotes() {
    return this.realTimeCardVote?.options.reduce((acc, option) => acc + option.votes, 0);
  }
  calculatePercentage(votes: number) {
    return votes / (this.calculateTotalVotes()||0) * 100;
  }
  closeReportModal() {
    this.close.emit();
  }
  async loadRealTimeCardVote(){

    const realTimeCardVote = await lastValueFrom(this.voteService.getVotesById(this.cardVote.id!))
    this.realTimeCardVote = realTimeCardVote;
    
  }

}
