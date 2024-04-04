
export interface Options{
  option: string;
  votes: number;
}
export interface IOptions{
  optionText: string;
  votes: number;
}
export interface ICardVoteModel {
  id?: string;
  topic: string;
  description: string;
  options: IOptions[];
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
  json(){
    return JSON.parse(JSON.stringify(this));
  }
}


