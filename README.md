# TrafficApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Quick overview of the current state

The frontend components are still in development, the app is tuned to perform calls in the backend and re-render the data dynamically using the router. Pagination is still not implemented.

The next step is to visualize the data with a the d3 framework (https://github.com/d3) and make the aggregated elements clickable for a drill down to specific classes of objects, filtered according to some meaningful criteria (e.g city where the incident happened).

## Remarks

The main goal of this application is to build a basic frontend which makes use of the service in the backend which was implemented with JAX-RS and JPA and fetches static data from an H2 database. In a further iteration it could look a lot cooler and bring additional functionality.
