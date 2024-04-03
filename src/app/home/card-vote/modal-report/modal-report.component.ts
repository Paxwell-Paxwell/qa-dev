import { Component,Output,EventEmitter, Input,OnInit } from '@angular/core';
import { CardVoteModel } from '../../../shared/Model/cardVote.model';

@Component({
  selector: 'app-modal-report',
  templateUrl: './modal-report.component.html',
  styleUrl: './modal-report.component.scss'
})
export class ModalReportComponent {
  @Output() close = new EventEmitter<void>();
  @Input() cardVote: CardVoteModel = new CardVoteModel('Topic 1', `Error Handling: Always include error handling 
  when working with asynchronous operations to manage exceptions gracefully.
  Subscription Management: In real-world applications, manage subscriptions
   to prevent memory leaks. This could involve unsubscribing from observables
    when the component is destroyed (e.g., using Subscription objects and the
       ngOnDestroy lifecycle hook).
  Dynamic Data: Since optionSelected now depends on asynchronous data, ensure 
  that any operation relying on optionSelected or Options accounts for the possibility that the data may not be immediately available.
  Loading State: Consider implementing a loading state in your component to enhance 
  user experience. This could involve displaying a spinner or a message while data is being fetched.
  This approach ensures that your ModalComponent works seamlessly with dynamic, 
  asynchronous data fetched from an API, allowing it to display voting options that are retrieved at runtime. 
  `, [{ option: 'Option 1', votes: 4 }, { option: 'Option 2', votes: 2 }, { option: 'Option 3', votes: 7},
   { option: 'Option 4', votes: 9 }, { option: 'Option 5', votes: 9 }
  , { option: 'Option 6', votes: 5 }, { option: 'Option 7', votes: 4 },
   { option: 'Option 8', votes: 3 }, { option: 'Option 9', votes: 2 }, { option: 'Option 10', votes: 1},
    { option: 'Option 11', votes: 3 }, { option: 'Option 12', votes: 4}
  ]);
  showDescription: boolean = false;
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
}
