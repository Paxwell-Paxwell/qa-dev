import { CardVoteModel } from './../shared/Model/cardVote.model';
import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrl: './create-vote.component.scss',

})
export class CreateVoteComponent implements OnInit{

  cardVoteModel: CardVoteModel = new CardVoteModel("","",[
    {option: "", votes: 0}]);
  submitCreateVote(event:Event){
    event.preventDefault();
    console.log(this.cardVoteModel);
  }
  ngOnInit(): void {
    console.log(this.cardVoteModel);
    
  }
  addOption(){
    this.cardVoteModel.options.push({option: "", votes: 0});
  }
  deleteOption(index: number){
    this.cardVoteModel.options.splice(index,1);
  }
}
