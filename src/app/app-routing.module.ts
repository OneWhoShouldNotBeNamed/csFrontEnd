import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { TestcompComponent } from './testcomp/testcomp.component';

const routes: Routes = [
  { path: '', component: SearchComponent }, // Default route
  { path: 'details', component: DetailsViewComponent },
  { path: 'test', component: TestcompComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
