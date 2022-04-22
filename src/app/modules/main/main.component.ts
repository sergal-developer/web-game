import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'main-component',
    templateUrl: './main.html',
    styleUrls: ['./main.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class MainComponent {
    title = 'game';
  }
  