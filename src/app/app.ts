import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-root',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: './app.html',
})
export class App {
  title:String;
  constructor() {
    this.title = 'Angular 2 App';
  }
}
