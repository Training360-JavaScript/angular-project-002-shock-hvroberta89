import { UserService } from './service/user.service';
import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  users: User[] = this.userService.list;
  currentUser: User = new User();

  constructor(private userService: UserService) {}

  selectCurrentUser(user: User): void {
    this.currentUser = user;
  }

  updateCurrentUser(user: User): void {
    this.userService.updateUser(user);
  }

  removeCurrentUser(user: User): void {
    this.userService.removeUser(user);
  }

}
