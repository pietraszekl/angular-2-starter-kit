import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersList } from '../shared/users-list';

@Component({
  styles: [`
    img{
      max-width: 300px;
      margin: 20px auto;
    }
  `],
  template: `
    <div *ngIf="user" class="jumbotron text-center">
    <h1>{{user.name}} ({{user.username}})</h1>
    <img [src]="user.avatar" class="img-responsive img-circle" alt="">
    </div>
  
  `
})

export class AboutUserComponent implements OnInit{
  user;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    let username = this.route.snapshot.params['username'];

    this.user = UsersList.find(function(user){
      return user.username === username;

    });

  }

}