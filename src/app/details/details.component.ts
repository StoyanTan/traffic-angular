import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/restservice';
import { Incident } from '../shared/incident';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  incidentDetails: Incident;
  id: string;

  constructor(
    public RS: RestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    return this.RS.getIncidentById(this.id).subscribe(data => this.incidentDetails = data);
  }

  getTweetId(tweet) {
    return tweet.slice(tweet.lastIndexOf('/') + 1);
  }

}
