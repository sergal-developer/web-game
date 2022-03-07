import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GameComponent } from "./game.component";

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        GameComponent
    ],
    exports: [
        GameComponent
    ],
    providers: [],
  })
  export class GameModule { }
  