import { Component } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'home-page',
  styles: [`.users-list li {cursor:pointer}`],
  template: `
    <div class="col-sm-4">
    <div *ngIf="users" class="form-group">
      <ul class="list-group users-list">
        <li class="list-group-item"
        *ngFor="let user of users"
        value="{{user.id}}"
        (click)="selectUser(user)"
        [class.active]="user === activeUser">
          {{ user.name }} ({{ user.username }})
        </li>
      </ul>
    </div>
    <user-form (userCreated)="onUserCreated($event)" ></user-form>
  </div>
  <div class="col-sm-8">

    <user-profile [user]="activeUser"></user-profile>

  </div>
  `
})

export class HomeComponent {
message = "Welcome "
  users:User[] = [
    {id: 1, name: "Lukasz", username: "pietraszekl"},
    {id: 2, name: "Mark", username: "markone"},
    {id: 3, name: "Tom", username: "tomtom"}
  ]
  activeUser:User;
  selectUser(user){
    this.activeUser = user
  }
  onUserCreated(event){
    this.users.push(event.user);
  }

}