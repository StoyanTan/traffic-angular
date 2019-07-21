# TrafficApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Quick overview

The landing page is a component with static content styled with Bootstrap which serves the purpose of an introduction and contains the motivations of the author of the dataset to put it together.

On the overview page a clustering of the incident records by city is visualized with a d3.js bubble diagram https://observablehq.com/@d3/bubble-chart. The chart is interactive and clickable and gives the user the count of incidents for every city. When it is clicked on we get routed to a table component with more information about the incidents for the selected city. It is paginated on the server side, so that we do not load all the data in the frontend at once. This makes it scalable and able to fit to much larger datasets.

When a concrete table row is clicked the user gets navigated to a tile with details about a specific incident containing all the data from this record and an embedded Twitter widget linking to the original tweet by the Manila traffic authority.



## Remarks

External dependencies are among others Bootstrap 4, d3.js and a styling guide for the table by Pablo Garcia (link in the CSS file). 

## Demo

https://github.com/StoyanTan/traffic-angular/blob/master/manila.gif
