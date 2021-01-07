import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { VoyagesComponent } from './voyages.component';
import { VoyageListComponent } from './voyage-list/voyage-list.component';
import { VoyagesItemComponent } from './voyage-list/voyages-item/voyages-item.component';
import { VoyageStartComponent } from './voyage-start/voyage-start.component';
import { VoyageDetailComponent } from './voyage-detail/voyage-detail.component';
import { VoyageEditComponent } from './voyage-edit/voyage-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DateAgoPipe} from '../pipes/date-ago.pipe';
import { VoyageNewComponent } from './voyage-new/voyage-new.component';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [VoyagesComponent, VoyageListComponent, VoyagesItemComponent, VoyageStartComponent, VoyageDetailComponent, VoyageEditComponent, VoyageNewComponent],
  exports: [
    VoyageListComponent,
    VoyagesComponent
  ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AppRoutingModule,

    ]
})
export class VoyagesModule { }
