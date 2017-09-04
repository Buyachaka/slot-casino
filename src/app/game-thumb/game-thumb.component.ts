import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-thumb',
  templateUrl: './game-thumb.component.html',
  styleUrls: ['./game-thumb.component.css']
})
export class GameThumbComponent implements OnInit {

  constructor( public url: string,public thumb: string,public displayName: string){ 


  }

  ngOnInit() {
  }

}
