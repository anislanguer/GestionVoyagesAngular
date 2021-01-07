import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {VoyageEditComponent} from './voyages/voyage-edit/voyage-edit.component';
import {VoyageNewComponent} from './voyages/voyage-new/voyage-new.component';

const routes: Routes = [
  {path: '', redirectTo: 'voyages', pathMatch:'full'},
  {
    path:'voyages',
    component: HomeComponent,
  },
  {
    path: 'voyages/new',
    component: VoyageNewComponent
  },
  {
    path: 'voyages/edit/:id',
    component: VoyageEditComponent
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
