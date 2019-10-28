import { Component, OnInit } from '@angular/core';
import {AppCounterService} from './app-counter.service';
import {LocalCounterService} from './local-counter.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private appCounterService: AppCounterService,
              private localCounterService: LocalCounterService) { }

  ngOnInit() {
  }

}
