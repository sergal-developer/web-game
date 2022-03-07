import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './modules/editor/editor.component';
import { GameComponent } from './modules/game/game.component';
import { MainComponent } from './modules/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
