import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'about-page',
  styles: [`
    .profile-card {
      background-color: #ECF0F1;
      border-radius: 3px;
      padding: 20%;
    }
  `],
  template: `
  <div class="row" *ngIf="users">
    <div class="col-md-4" *ngFor="let user of users">
      <div class="profile-card text-center" [routerLink]="['/about', user.username]">
        <img [src]="user.avatar" class="img-responsive img-circle" alt="{{user.user}}">
        <h2>{{user.name}}</h2>
        <p><a href="https://twitter.com/{{user.username}}">{{user.username}}</a></p>
      </div>
    </div>
  </div>
  `
})

export class AboutComponent implements OnInit{
  users: User[];

  constructor(private userService: UserService){}
  ngOnInit() {
    this.userService.getUsers().then(users => this.users = users);
  }
}