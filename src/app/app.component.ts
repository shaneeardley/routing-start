import { Component } from '@angular/core';
import { topToBottom } from './animations';

import { trigger, transition, style, group, animate, query, animateChild,useAnimation } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    trigger('routerAnimations', [
      transition('servers => users', [
        useAnimation(topToBottom)
      ]), transition('users => servers', [
        useAnimation(topToBottom)
      ])
    ])
  ]
})
export class AppComponent {
  prepRouteState(outlet: any) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
