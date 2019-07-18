import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/restservice';
import { Incident } from '../shared/incident';
import { D3PackedBubbleChartService } from '../shared/d3-packed-bubble-chart';
import { KeyValue } from '../shared/keyvalue';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  incidents:  Incident[];
  dataset: {
      children: KeyValue[];
    }

  constructor(
    public RS: RestService,
    private d3PackedBubbleChartService: D3PackedBubbleChartService,
  ) { }

  ngOnInit() {
    this.RS.getClustering().subscribe(data => this.dataset = data);
    this.d3PackedBubbleChartService.renderChart(this.dataset);
  }

  setClickedRow(i) {
    return this.RS.getIncidents(i).subscribe(data => this.incidents = data);
  }

}
