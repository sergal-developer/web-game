import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'main-component',
    templateUrl: './main.html',
    styleUrls: ['./main.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class MainComponent implements OnInit {
    
    constructor(private _router: Router) {}

    ngOnInit(): void {
      
    }

    redirect(page) {
      this._router.navigate([page]);
    }
    title = 'game';
  }
  