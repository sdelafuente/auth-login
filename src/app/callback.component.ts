// callback.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-callback',
  template: `
    <p>
      Loading...
    </p>
  `,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.handleLoginCallback();
  }

}
