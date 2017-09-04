import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { StateManagerService } from '../state-manager.service';
import { GameThumbComponent } from '../game-thumb/game-thumb.component';


@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css'],
  providers: []
})
export class MainGameComponent implements OnInit {
   currUrl:SafeResourceUrl;
   currLayout:number;
	 gameSlotsThumbs = [
    new GameThumbComponent("https://plaingaming-game.thunderkick.com/gamelauncher/desktopLauncher/plaingaming/tk-esqueleto-a?langIso=pt&freeAccountCurrencyIso=BRL", 'assets/imgs/thumbs/ck-esqueleto-explosivo.jpg','Esqueleto Explosivo'),
    new GameThumbComponent("https://plaingaming-static.casinomodule.com/games/piggyriches_mobile_html/game/piggyriches_mobile_html.xhtml?gameId=piggyriches_not_mobile_sw&staticServer=https%3A%2F%2Fplaingaming-static.casinomodule.com%2F&disableDeviceDetection=true&height=100%25&width=100%25&targetElement=game-wrapper&enforceRatio=false&flashParams.allowFullScreen=false&server=https%3A%2F%2Fplaingaming-game.casinomodule.com%2F&lang=br&sessId=DEMO-71797936-BRL&operatorId=verajohn", 'assets/imgs/thumbs/aloha.jpg','Aloha Bingo'),
    new GameThumbComponent("https://plaingaming-static.casinomodule.com/games/piggyriches_mobile_html/game/piggyriches_mobile_html.xhtml?gameId=piggyriches_not_mobile_sw&staticServer=https%3A%2F%2Fplaingaming-static.casinomodule.com%2F&disableDeviceDetection=true&height=100%25&width=100%25&targetElement=game-wrapper&enforceRatio=false&flashParams.allowFullScreen=false&server=https%3A%2F%2Fplaingaming-game.casinomodule.com%2F&lang=br&sessId=DEMO-71797936-BRL&operatorId=verajohn", 'assets/imgs/thumbs/fruit_shop.jpg','Fruit Shop'),
    new GameThumbComponent("https://demogames.pragmaticplay.net/gs2c/openGame.do?lang=br&cur=BRL&gameSymbol=vs4096jurassic", 'assets/imgs/thumbs/jurassic_giants.jpg','Jurrasic Slot'),
    new GameThumbComponent("https://plaingaming-game.thunderkick.com/gamelauncher/desktopLauncher/plaingaming/tk-s1-g10?langIso=pt&freeAccountCurrencyIso=BRL&operatorId=303", 'assets/imgs/thumbs/bonanza.jpg','Bonanza'),
    new GameThumbComponent("https://mltcw.playngonetwork.com/casino/GameLoader?pid=70&gid=bugsparty&gameId=317&lang=pt_BR&practice=1&channel=desktop&div=game-wrapper&width=100%&height=100%&user=practice&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=&rcmga=&resourcelevel=0&hasjackpots=False", 'assets/imgs/thumbs/bugs_party.jpg','Bugs Party'),
    new GameThumbComponent("https://nogs-gl.nyxmalta.com/game/?nogsgameid=70293&nogsoperatorid=169&nogscurrency=brl&nogslang=pt_br&nogsmode=demo&clienttype=html5", 'assets/imgs/thumbs/red_roo.jpg','Red Roo'),
    new GameThumbComponent("https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7336&org=Demo&currency=BRL&lang=pt-br&channel=pc&fullscreen=yes&localiseAsset=yes", 'assets/imgs/thumbs/rainbow_ryan.jpg','Rainbow Ryan'),
    new GameThumbComponent("https://mltcw.playngonetwork.com/casino/GameLoader?pid=70&gid=moonprincess&gameId=334&lang=pt_BR&practice=1&channel=desktop&div=game-wrapper&width=100%&height=100%&user=practice&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=&rcmga=&resourcelevel=0&hasjackpots=False", 'assets/imgs/thumbs/moon_princes.jpg','Moon Princes'),   
  ];
  gameBingoThumbs = [
    new GameThumbComponent("https://playb.zitrogames.com/?token=FREE0NTRBRCC4RO320170816002520&lang=es&bingo_game=catrina&demo=1&clienttype=web", 'assets/imgs/thumbs/catrina.jpg','Catrina'),
    new GameThumbComponent("https://playb.zitrogames.com/?token=FREE8VWI6R21NUSX20170816003908&lang=en&bingo_game=fishmania&demo=1&clienttype=web", 'assets/imgs/thumbs/fishmania.jpg','FishMania'),
    new GameThumbComponent("https://playb.zitrogames.com/?token=FREE8OGDE8JRX5KH20170816004108&lang=en&bingo_game=tacoMania&demo=1&clienttype=web", 'assets/imgs/thumbs/taco_mania.jpg','Taco Mania'),
    new GameThumbComponent("https://ncw.oztech.systems/api/rgs-api/1.1/launch?opid=900129055&gid=15&ul=en&t=FREE9JMBJP2K32XE20170816004149&uc=USD&ly=D&cid=0&p=D", 'assets/imgs/thumbs/locomodin.png','Locomodin'),
    new GameThumbComponent("https://playb.zitrogames.com/?token=FREE0RNTXE4B1RIY20170816004250&lang=en&bingo_game=wildRocks&demo=1&clienttype=web", 'assets/imgs/thumbs/wild_rocks.jpg','Locomodin'),
    new GameThumbComponent("https://playb.zitrogames.com/?token=FREE6JP0T0KP56XI20170816004336&lang=en&bingo_game=bingoTrucks&demo=1&clienttype=web", 'assets/imgs/thumbs/bingo_trucks.jpg','Bingo Trucks'),
    new GameThumbComponent("https://playb.zitrogames.com/?token=FREE6YF1C70ME33U20170816004516&lang=en&bingo_game=ultimoBingoEnParis&demo=1&clienttype=web", 'assets/imgs/thumbs/last_bingo.jpg','Paris Bingo'),
    new GameThumbComponent("https://ncw.oztech.systems/api/rgs-api/1.1/launch?opid=900129055&gid=1&ul=en&t=FREE8MKXEFT8PNC020170816004658&uc=USD&ly=D&cid=0&p=D", 'assets/imgs/thumbs/ace_mania.jpg','Ace Mania'),
    new GameThumbComponent("https://ncw.oztech.systems/api/rgs-api/1.1/launch?opid=900129055&gid=1&ul=en&t=FREE8MKXEFT8PNC020170816004658&uc=USD&ly=D&cid=0&p=D", 'assets/imgs/thumbs/lucky_hero.jpg','Lucky Hero'),
  ];
   gameMemeThumbs = [
    new GameThumbComponent("http://afiliapub.com/affiliates/scripts/lgwe69qck32?a_aid=442502&amp;a_bid=1fa0ae0e", '//afiliapub.com/affiliates/accounts/default1/lgwe69qbk32/1fa0ae0e.gif','Catrina'),
    new GameThumbComponent("http://afiliapub.com/affiliates/scripts/lgwe69qck32?a_aid=442502&amp;a_bid=37b52733", '//afiliapub.com/affiliates/accounts/default1/lgwe69qbk32/37b52733.gif','FishMania'),
    new GameThumbComponent("https://playb.zitrogames.com/?token=FREE8OGDE8JRX5KH20170816004108&lang=en&bingo_game=tacoMania&demo=1&clienttype=web", 'assets/imgs/thumbs/troll_faces.jpg','Taco Mania')   
  ];

  constructor(private _stateManager: StateManagerService,private sanitizer: DomSanitizer) {
    this.currUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://plaingaming-game.thunderkick.com/gamelauncher/desktopLauncher/plaingaming/tk-esqueleto-a?langIso=pt&freeAccountCurrencyIso=BRL");
    this.currLayout = 0;
   }

  ngOnInit() {

  }
  public getGameThumbs () {
    if (this._stateManager.currGameCategory == 'slots') {
         return this.gameSlotsThumbs;
    }
    else if (this._stateManager.currGameCategory == 'bingo') {
         return this.gameBingoThumbs;        
    }
    else if (this._stateManager.currGameCategory == 'memes')
         return this.gameMemeThumbs;
  }
  public isCurrGameCategory (input) {
    return (input == this._stateManager.currGameCategory)
  }
  public getStateCategory  () {
    return this._stateManager.currGameCategory;
  }
  public sanitizeUrl (url) {   
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }
  public openPromotion (url) {
   
    window.open(url, "_blank");
  }

  public selectGame (url) {
     this.currUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          
    this._stateManager.setCurrentState (1);
  }
  public getcurrGame () {
    return this.currUrl;
  }
  public getState(){
  	
  return this._stateManager.getCurrentState ();

  }
  public getCurrLayout () {
    let param = this._stateManager.getCurrGameCategory ();
    return param;
  }
 

}



