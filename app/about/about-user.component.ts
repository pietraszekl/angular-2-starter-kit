import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  styles: [`
    img{
      max-width: 300px;
      margin: 20px auto;
    }
  `],
  template: `
    <a (click)="goBack()" class="btn btn-sm">Go Back</a>
    <div *ngIf="user" class="jumbotron text-center">
    <h1>{{user.name}} ({{user.username}})</h1>
    <img [src]="user.avatar" class="img-responsive img-circle" alt="">
    </div>
  `
})

export class AboutUserComponent implements OnInit{
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(){
    let username = this.route.snapshot.params['username'];
    this.userService.getUser(username).then(user => this.user = user );
  }

  goBack(){
    this.router.navigate(['/about'])
  }
}