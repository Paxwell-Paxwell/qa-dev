export interface Options{
  option: string;
  votes: number;

}
export class CardVoteModel {
  topic: string;
  description: string;
  options: Options[];
  constructor(topic: string, description: string, options: Options[]){
    this.topic = topic;
    this.description = description;
    this.options = options;
  }
}
