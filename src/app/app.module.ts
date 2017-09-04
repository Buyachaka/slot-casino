import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SlotCasinoComponent } from './slot-casino/slot-casino.component';
import { MainGameComponent } from './main-game/main-game.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { LobbyComponent } from './lobby/lobby.component';
import { StateManagerService } from './state-manager.service';
import { GameThumbComponent } from './game-thumb/game-thumb.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SlotCasinoComponent,
    MainGameComponent,
    BottomBarComponent,
    LobbyComponent,
    GameThumbComponent,
    LeftPanelComponent,
    TopPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [StateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
