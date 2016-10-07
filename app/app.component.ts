import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
        <a href="0#" class="navbar-brand"  >     My Angular2 App </a>
        </div>
      </nav>
    </header>

    <main>
      <div class="jumbotron">
        <h1>{{message}}</h1>
      </div>

      <div *ngIf="users" class="form-group">
      <label for="users">Select user:</label>
        <select id="users" class="form-control">
          <option *ngFor="let user of users" value="{{user.id}}">
            {{user.name}} ({{user.username}})
          </option>
        </select>
      </div>
    </main>

    <footer class="text-center">
      Copyright &copy; 2016
    </footer>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {
  message = "Welcome to Our App!"
  users = [
    {id: 1, name: "Lukasz", username: "pietraszekl"},
    {id: 2, name: "Mark", username: "tomtom"},
    {id: 3, name: "Tom", username: "markone"}
  ]
}
