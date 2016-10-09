import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent {
  message = "Welcome "
  users:User[] = [
    {id: 1, name: "Lukasz", username: "pietraszekl"},
    {id: 2, name: "Mark", username: "tomtom"},
    {id: 3, name: "Tom", username: "markone"}
  ]
  activeUser:User;
  selectUser(user){
    this.activeUser = user
  }
}
