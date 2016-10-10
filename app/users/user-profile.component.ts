import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'user-profile',
  template: `
  <div class="jumbotron">
    <div *ngIf="user">
      <h1>{{ message }} {{user.name}}</h1>
      <input class="form-control" [(ngModel)]="user.name"/>
    </div>
    <div *ngIf="!user">
      <h2><span class="glyphicon glyphicon-hand-left"></span> Choose user</h2>
    </div>
  </div>
  `
})

export class UserProfileComponent {
  @Input() user: User;
}
