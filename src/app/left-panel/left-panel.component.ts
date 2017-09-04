import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private _stateManager: StateManagerService, private http: Http) { }

  ngOnInit() {
  }

    public golobby(param){
  	this._stateManager.toggleCurrentState ();
        
      }
     public login (param) {
    console.log ("In login");

	this.http.request('http://localhost:5000/sessions').subscribe((res: Response) => {
		console.log(res.json());
	});
  }

}
