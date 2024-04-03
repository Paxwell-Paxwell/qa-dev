import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-vote',
  templateUrl: './card-vote.component.html',
  styleUrl: './card-vote.component.scss'
})
export class CardVoteComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  showVoteModal: boolean = false;
  showReportModal: boolean = false;
  clickedVote(){
    this.showVoteModal = true;
  }
  closeVoteModal(){
    this.showVoteModal = false;
  }
  clickedReport(){
    this.showReportModal = true;
  }
  closeReportModal(){
    this.showReportModal = false;
  }

}
