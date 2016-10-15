import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

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

export class HomeComponent implements OnInit {
  message = "Welcome ";
  users: User[];
  activeUser: User;

  selectUser(user){
    this.activeUser = user
  }
  onUserCreated(event){
    this.users.push(event.user);
  }

  constructor(private userService: UserService){}
  ngOnInit() {
    this.userService.getUsers().then(users => this.users = users);
  }

}