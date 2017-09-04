import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {

  constructor(private _stateManager: StateManagerService) {

   }

  ngOnInit() {
  }

   public getState(){
  	
  return this._stateManager.getCurrentState ();

  }
  public setSelectedCategory (newCat) {
    this._stateManager.setCurrentState (false);
    this._stateManager.setCurrentGameCategory (newCat);
  }

}
