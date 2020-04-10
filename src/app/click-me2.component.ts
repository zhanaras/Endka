import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me2',
  template: `
    <button (click)="onClickMe()">Sign in</button>
    {{clickMessage}}`
    
})
export class ClickMe2Component {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You signed in';
  }
}