import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {App} from './app/app';

// import {enableProdMode} from '@angular/core';
// enableProdMode()

function main(initialHmrState?: any): Promise<any> {
  return bootstrap(App, [
    HTTP_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ])
    .catch(err => console.error(err));
}

export let isDevelopmentMode = true;

if (isDevelopmentMode) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module); // pass the main function
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}