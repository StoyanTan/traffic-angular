import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'list/:city', component: TableComponent, runGuardsAndResolvers: 'always' },
  { path: 'details/:id', component: DetailsComponent },
  { path: '', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
