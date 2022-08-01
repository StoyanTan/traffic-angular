import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../shared/restservice';
import { Incident } from '../shared/incident';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('data') incidents: Incident[] = [];
  asyncIncidents: Incident[];
  p: number = 1;
  total: number;
  result: {
    count: number,
    incidents: Incident[]
  }
  loading: boolean;

  city: string;

  constructor(
    public RS: RestService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPage(1);
  }

  setClickedRow(i) {
    this.router.navigate(['details', i]);
  }

  getPage(page: number) {
    this.loading = true;
    this.city = this.route.snapshot.paramMap.get('city');
    this.serverCall(this.city, page).subscribe(data => this.result = data);
  }

  serverCall(city: string, page: number): Observable<any> {
    return this.RS.getIncidents(city, page);
  }
}



