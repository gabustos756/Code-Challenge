import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { UserCardComponent } from '../user-card/user-card.component';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    UserCardComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
