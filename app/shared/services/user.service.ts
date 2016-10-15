import { Injectable } from '@angular/core';
import { User } from '../models/user';


const usersPromise: Promise<User[]>= Promise.resolve([
  {id: 1, name: "Lukasz", username: "pietraszekl", avatar: "https://pbs.twimg.com/profile_images/502343261000712192/2uRnGD2f.jpeg"},
  {id: 2, name: "Andrea", username: "andygeko", avatar: "https://pbs.twimg.com/profile_images/378800000834156299/e2c348801aa3d6cd74b4867773f354f7.jpeg"},
  {id: 3, name: "Simon", username: "sidavies_says", avatar: "https://pbs.twimg.com/profile_images/785531496711000065/MTTdBUGk.jpg"}
]);

@Injectable()

export class UserService {

  getUsers(){
    return usersPromise;
  }

  getUser(username){
    return usersPromise.then( users => users.find( user => user.username === username ) );
  }
}





