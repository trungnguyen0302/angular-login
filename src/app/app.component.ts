import { Component } from '@angular/core';

import { HttpRequestService } from './http-request.service';
import { LogInService } from './log-in/log-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    HttpRequestService,
    LogInService
  ]
})
export class AppComponent {
  title = 'app';
  logInSuccess: boolean;

  logInEvent(result: boolean){
    this.logInSuccess = result;
  }
}
