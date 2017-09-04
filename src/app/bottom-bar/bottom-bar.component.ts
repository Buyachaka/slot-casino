import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']

})
export class BottomBarComponent implements OnInit {

  constructor(private _stateManager: StateManagerService) { }

  ngOnInit() {
  }

  public golobby(param){
  	this._stateManager.toggleCurrentState ();
        
      }

}
