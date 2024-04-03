import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardVoteModel} from "../../../shared/Model/cardVote.model";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
    @Output() close = new EventEmitter<void>();
    @Input() Options: CardVoteModel= new CardVoteModel('Topic 1', 'Description 1', [{option: 'Option 1', votes: 0}, {option: 'Option 2', votes: 0}]);
    optionSelected: boolean[] = [false, false];
  checkOption(event: Event, index: number) {
    console.log('checkOption', event, index);
    const inputElement = event.target as HTMLInputElement;
    // Set the current checkbox state based on the actual checked property of the checkbox
    this.optionSelected[index] = inputElement.checked;

    // Ensure only the selected checkbox is true, others are false
    this.optionSelected.forEach((_, i) => {
      if(i !== index) {
        this.optionSelected[i] = false;
      }
    });
  }

   closeModal(){
      this.close.emit();
   }
}
