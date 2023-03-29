import { Component } from '@angular/core';
import { AuthService } from './services/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kzone App';

  constructor(public user: AuthService) {}
}
