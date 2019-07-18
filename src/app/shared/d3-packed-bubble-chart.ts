import { Injectable } from '@angular/core';
import * as d3 from 'd3';


@Injectable()
export class D3PackedBubbleChartService {

  constructor() { }

  renderChart(dataset) {
    let height = 800;
    let width = 1200;
    let color = d3.scaleOrdinal(d3.schemeCategory10);

    let bubble = d3.pack()
      .size([width, height])
      .padding(1.5);

    let svg = d3.select('#chart')
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "bubble");

    let nodes = d3.hierarchy(dataset)
      .sum(function (d: any) {
        return d.count;
      });

    let node = svg.selectAll(".node")
      .data(bubble(nodes).descendants())
      .enter()
      .filter(function (d) {
        return !d.children
      })
      .append("g")
      .attr("class", "node")
      .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      }).style("fill", function (d, i: any) {
        return color(i);
      });

    node.append("title")
      .text(function (d: any) {
        return d.parameter + ": " + d.count;
      });

    node.append("circle")
      .attr("x", function (d) { return d.x; })
      .attr("y", function (d) { return d.y })
      .attr("r", function (d) {
        return d.r;
      })
      .style("fill", function (d, i: any) {
        return color(i);
      });

    node.append("text")
      .attr("dy", ".2em")
      .style("text-anchor", "middle")
      .text(function (d: any) {
        return d.data.parameter.substring(0, d.r / 3);
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", function (d) {
        return d.r / 5;
      })
      .attr("fill", "white");

    node.append('text')
      .attr("dy", "1.3em")
      .style("text-anchor", "middle")
      .text(function (d: any) {
        return d.data.count;
      })
      .attr("font-family", "Gill Sans")
      .attr("font-size", function (d) {
        return d.r / 5;
      })
      .attr("fill", "white");

    // d3.select(self.frameElement)
    //   .style("height", height + "px")
    //   .style("width", width2 + "px");;


  }

}