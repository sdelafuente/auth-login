import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Daily Deals';

  constructor(public authService: AuthService) {}
  /*
  Te quedaste donde esta el titulo: Adding Authentication to Your Angular App
  Pagina: https://auth0.com/blog/angular-2-authentication/
  */
}
