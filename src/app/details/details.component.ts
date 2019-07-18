import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/restservice';
import { Incident } from '../shared/incident';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  incidentDetails: Incident;

  constructor(
    public RS: RestService
  ) { }

  ngOnInit() {
    return this.RS.getIncidentById("23").subscribe(data => this.incidentDetails = data);
  }

}
