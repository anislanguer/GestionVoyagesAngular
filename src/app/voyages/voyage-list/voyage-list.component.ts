import {Component, Input, OnInit} from '@angular/core';
import {Voyage} from '../../voyage.model';
import {VoyagesService} from '../../services/voyages.service';

@Component({
  selector: 'app-voyage-list',
  templateUrl: './voyage-list.component.html',
  styleUrls: ['./voyage-list.component.css']
})
export class VoyageListComponent implements OnInit {
  departSelected = false;
  voyages:Voyage[]=[];
  voyagesFiltre = this.voyages;
  @Input() selectedDepart;
  @Input() selectedArrive;
  @Input() selectedDate;
  constructor(private voyagesService : VoyagesService) { }

  ngOnInit(): void {
    this.selectedDepart.subscribe(s => {
      this.departSelected = true;
      this.voyagesFiltre=this.voyages;
      this.voyagesFiltre=this.voyagesFiltre.filter(v => {
        return v.lieu_dep === s || s==='Départ';
      });
    });
    this.selectedArrive.subscribe(s => {
      if(!this.departSelected || this.voyagesFiltre.length==0) {
        this.voyagesFiltre = this.voyages;
      }
      this.voyagesFiltre=this.voyagesFiltre.filter(v => {
        return v.lieu_arr === s || s==='Destination';
      });
    });
    this.selectedDate.subscribe(s =>{
      const d1 = new Date(s);
      this.voyagesFiltre=this.voyagesFiltre.filter(v => {
        const d2 = new Date(v.dateh_dep.toString());
        return d2 > d1;
      });
    });
    this.voyagesService.getVoyages().subscribe(v => {
      this.voyages = v;
      this.voyagesFiltre = v;
    });

  }

  spliceVoyage(id: any) {
    const voyage = this.voyagesFiltre.find(v => v.id === id);
    this.voyagesFiltre.splice(this.voyagesFiltre.indexOf(voyage), 1);
  }
}
