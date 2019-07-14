import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/restservice';
import { Incident } from '../shared/incident';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  incidents:  Incident[];

  constructor(
    public RS: RestService
  ) { }

  ngOnInit() {
    return this.RS.getIncidents("").subscribe(data => this.incidents = data); 
  }

  setClickedRow(i) {
    return this.RS.getIncidents(i).subscribe(data => this.incidents = data);
  }

}
