import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {PileService} from './services/pile.service';
import {MainMenuComponent} from './components/main-menu.component/main-menu.component';
import {GameBoardComponent} from './components/game-board.component/game-board.component';
import {PileComponent} from './components/game-board.component/pile.component/pile.component';
import {PlayerService} from './services/player.service';
import {PlayerComponent} from './components/game-board.component/player.component/player.component';
import {CardComponent} from './components/game-board.component/card.component/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameBoardComponent,
    PileComponent,
    PlayerComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PileService,
    PlayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
