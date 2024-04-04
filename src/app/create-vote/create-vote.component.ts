import { CardVoteModel } from './../shared/Model/cardVote.model';
import { Component,OnInit} from '@angular/core';
import { VoteService } from '../api/vote.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrl: './create-vote.component.scss',

})

export class CreateVoteComponent implements OnInit{

  cardVoteModel: CardVoteModel = new CardVoteModel("","",[
    {option: "option1", votes: 0},
    {option: "option2", votes: 0}]);
    constructor(private voteService: VoteService, private router: Router) {}
  submitCreateVote(event:Event){
    event.preventDefault();
    if(this.cardVoteModel.topic === "" || this.cardVoteModel.description === "" || this.cardVoteModel.options.length <2){
      console.log(this.cardVoteModel);
      
      console.log("Please fill out all fields");
      return;
    }

    const format = {
      topic: this.cardVoteModel.topic,
      description: this.cardVoteModel.description,
      options: this.cardVoteModel.options.map(option => {
        return {
          optionText: option.option,
          votes: option.votes
        }
      })
    }
  
    this.voteService.createVote(format).subscribe({
      next: async (data) => {
          this.router.navigate(['/Home'])
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
      complete: () => {
        console.log('Completed');
      }
    })
   
  }
  ngOnInit(): void {
    console.log(this.cardVoteModel);
    
  }
  addOption(){
    this.cardVoteModel.options.push({option: `option${this.cardVoteModel.options.length+1}`, votes: 0});
    // console.log(this.cardVoteModel.options);
  }
  logChange(value: string, index: number) {
    console.log(`Option ${index} changed to: ${value}`);
  }
  
  deleteOption(index: number){
    this.cardVoteModel.options.splice(index,1);
  }
  trackByFn(index: number, item: any): number {
    // console.log("item",item);
    return index; // or index if you prefer, but unique id is better
  }
  

}
