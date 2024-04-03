import { Component, EventEmitter, Input, Output, OnInit, ViewChildren, QueryList,ElementRef ,AfterViewInit} from '@angular/core';
import { CardVoteModel } from "../../../shared/Model/cardVote.model";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{
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
  `, [{ option: 'Option 1', votes: 0 }, { option: 'Option 2', votes: 0 }, {
    option: 'Option 3', votes: 0
  }, { option: 'Option 4', votes: 0 }]);
  showDescription: boolean = false;
  optionSelected: boolean[] = [];
  // @ViewChildren('option') optionElements!: QueryList<ElementRef<HTMLInputElement>>; // Add '!' to indicate that it will be initialized later.
  // ngAfterViewInit() {
  //   this.optionElements.forEach(input => console.log(input.nativeElement.checked)); // Accesses each element in the collection.
  // }
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
  submitForm(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if(this.optionSelected.includes(true)){
      console.log('submitForm', this.optionSelected);
    }
    this.closeModal();
    // Rest of your method...
  }
  closeModal() {
    this.close.emit();
  }
}
