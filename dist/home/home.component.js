"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent() {
        this.message = "Welcome ";
        this.users = [
            { id: 1, name: "Lukasz", username: "pietraszekl" },
            { id: 2, name: "Mark", username: "markone" },
            { id: 3, name: "Tom", username: "tomtom" }
        ];
    }
    HomeComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
    };
    HomeComponent.prototype.onUserCreated = function (event) {
        this.users.push(event.user);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-page',
            styles: [".users-list li {cursor:pointer}"],
            template: "\n    this is home page\n      <div class=\"col-sm-4\">\n    <div *ngIf=\"users\" class=\"form-group\">\n      <ul class=\"list-group users-list\">\n        <li class=\"list-group-item\"\n        *ngFor=\"let user of users\"\n        value=\"{{user.id}}\"\n        (click)=\"selectUser(user)\"\n        [class.active]=\"user === activeUser\">\n          {{ user.name }} ({{ user.username }})\n        </li>\n      </ul>\n    </div>\n    <user-form (userCreated)=\"onUserCreated($event)\" ></user-form>\n  </div>\n  <div class=\"col-sm-8\">\n\n    <user-profile [user]=\"activeUser\"></user-profile>\n\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map