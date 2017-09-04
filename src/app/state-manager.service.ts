import { Injectable } from '@angular/core';

@Injectable()
export class StateManagerService {
	currState:boolean;
  currGameCategory:string;

  getGames(): void {} // stub

  getCurrentState(): any {
  	return this.currState;

  }
  getCurrGameCategory(): any {
    return this.currState;

  }
  setCurrentGameCategory(newCat) : any {
    this.currGameCategory = newCat;
  }
  toggleCurrentState (): any {
     this.currState = !this.currState;
    }

    
  setCurrentState (newstate): any {
    this.currState = newstate;
    
    }

  constructor() { 
  	 this.currState = false;
     this.currGameCategory = 'slots';
  }

}
