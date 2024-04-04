import { Component, EventEmitter, Input, Output, OnInit, ViewChildren, QueryList,ElementRef ,AfterViewInit} from '@angular/core';
import { CardVoteModel, ICardVoteModel } from "../../../shared/Model/cardVote.model";
import { VoteService } from "../../../api/vote.service";
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{
  @Output() close = new EventEmitter<void>();
  @Input() cardVote!: ICardVoteModel
  showDescription: boolean = false;
  optionSelected: boolean[] = [];
  // @ViewChildren('option') optionElements!: QueryList<ElementRef<HTMLInputElement>>; // Add '!' to indicate that it will be initialized later.
  // ngAfterViewInit() {
  //   this.optionElements.forEach(input => console.log(input.nativeElement.checked)); // Accesses each element in the collection.
  // }
  constructor(private voteService: VoteService) {
  }
  ngOnInit() {
    this.optionSelected = this.cardVote.options.map(() => false);
  }
  checkOption(event: Event, index: number) {
    // console.log('checkOption', event, index);
    const inputElement = event.target as HTMLInputElement;
    // Set the current checkbox state based on the actual checked  property of the checkbox
    this.optionSelected[index] = inputElement.checked;

    // Ensure only the selected checkbox is true, others are false
    this.optionSelected.forEach((_, i) => {
      if (i !== index) {
        this.optionSelected[i] = false;
      }
    });
  }

  showDescriptionToggle() {
    this.showDescription = !this.showDescription;
  }
  async submitForm(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if(this.optionSelected.includes(true)){
      const optionIndex = this.optionSelected.indexOf(true);
      try {
          await this.updateVote(optionIndex);
          // closeModal() is called after updateVote resolves
          this.closeModal();
      } catch (error) {
          console.error("Failed to update vote", error);
          // Handle any errors that occurred during the updateVote call
      }
    }
    this.closeModal();
    // Additional logic if needed...
}
  private async updateVote(optionIndex: number): Promise<void> {
    const format = {
      id: this.cardVote.id!,
      optionIndex
    };

    try {
        const data = await firstValueFrom(this.voteService.updateVote(format));
        console.log('Vote updated successfully', data);
        // No need to explicitly return a resolved promise; just allow the function to complete.
    } catch (error) {
        console.error('There was an error!', error);
        // Re-throw the error if you want to handle it further up the call stack.
        throw error;
    }
}
  closeModal() {
    this.close.emit();
  }
}
