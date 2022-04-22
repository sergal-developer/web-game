import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'game-component',
    templateUrl: './game.html',
    styleUrls: ['./game.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class GameComponent {
    title = 'game';
  }
  