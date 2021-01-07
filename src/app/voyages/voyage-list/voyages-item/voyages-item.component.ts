import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Voyage} from '../../../voyage.model';
import {Route, Router} from '@angular/router';
import {VoyagesService} from '../../../services/voyages.service';


@Component({
  selector: 'app-voyages-item',
  templateUrl: './voyages-item.component.html',
  styleUrls: ['./voyages-item.component.css']
})
export class VoyagesItemComponent implements OnInit {
  @Input() voyage: Voyage;
  @Output() idVoyage = new EventEmitter();
  modified : boolean;
  constructor(private router : Router,private voyagesService : VoyagesService) { }

  ngOnInit(): void {
    const d1 = new Date(this.voyage.created_at.toString());
    const d2 = new Date(this.voyage.updated_at.toString());
    this.modified = d2 > d1;
  }

  deleteVoyage(id: number) {
    this.voyagesService.deleteVoyage(id).subscribe(
      res=>{
        this.idVoyage.emit(id);
      }
    );

  }
}
