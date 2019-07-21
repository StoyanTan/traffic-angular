import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/restservice';
import { Incident } from '../shared/incident';
import { D3PackedBubbleChartService } from '../shared/d3-packed-bubble-chart';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  incidents:  Incident[];

  constructor(
    public RS: RestService,
    private d3PackedBubbleChartService: D3PackedBubbleChartService,
  ) { }

  ngOnInit() {
    this.RS.getClustering().subscribe(data => 
      {
        this.d3PackedBubbleChartService.renderChart(data);
      })
  }
}
