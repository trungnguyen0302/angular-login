import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpRequestService } from '../http-request.service';
import { LogInModel } from './log-in.model';

@Injectable()
export class LogInService {
  constructor(private httpRequestService: HttpRequestService) { }
  
  logIn(query: LogInModel) : Observable<boolean> {
    const url = 'api/login';
    return this.httpRequestService.postJson(query, url);
  }
}
