import { Component, OnInit } from '@angular/core';
import { RestService } from './shared/restservice';
import { Incident } from './shared/incident';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  

  constructor(
    
  ) { }

  ngOnInit() {
  
  }
}
