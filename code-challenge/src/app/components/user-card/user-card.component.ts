import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: User;
}
