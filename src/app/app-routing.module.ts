import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainMenuComponent} from './components/main-menu.component/main-menu.component';
import {GameBoardComponent} from './components/game-board.component/game-board.component';


const routes: Routes = [
  {
    path: 'menu',
    component: MainMenuComponent,
  },
  {
    path: 'board',
    component: GameBoardComponent
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'menu'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
