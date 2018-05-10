import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { LogInService } from './log-in.service';
import { LogInModel } from './log-in.model';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  model: LogInModel;
  @Output() logInEvent = new EventEmitter<boolean>();

  constructor(public logInService: LogInService) {}

  ngOnInit() {
    this.model = new LogInModel();
  }

  logIn(){
    this.logInService.logIn(this.model)
      .subscribe(result => {
        this.logInEvent.emit(result);
      });
  }
}
