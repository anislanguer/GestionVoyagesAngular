import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VoyagesService} from '../../services/voyages.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Voyage} from '../../voyage.model';

@Component({
  selector: 'app-voyage-edit',
  templateUrl: './voyage-edit.component.html',
  styleUrls: ['./voyage-edit.component.css']
})
export class VoyageEditComponent implements OnInit {
  voyageForm: FormGroup;
  formData : FormData;
  voyage: Voyage;
  constructor(private router: Router,private formBuilder : FormBuilder,private voyagesService : VoyagesService,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.voyagesService.getVoyageById(id).subscribe(res=>{
          this.voyage = res;
          this.initForm();
    });


  }

  private initForm() {
    this.voyageForm = this.formBuilder.group({
        depart: [this.voyage.lieu_dep, Validators.required],
        arrivé: [this.voyage.lieu_arr, Validators.required],
        dateh_dep: [this.voyage.dateh_dep, Validators.required],
        num_voiture: [this.voyage.num_voiture, Validators.required],
        num_tel: [this.voyage.num_tel, Validators.required],
        nbr_places: [this.voyage.nbr_places, Validators.required],
        prix: [this.voyage.prix, Validators.required],

      }
    )
  }

  onSubmit() {
    const formVoyageUpValue = this.voyageForm.value;
    const lieu_dep = formVoyageUpValue.depart;
    const lieu_arr = formVoyageUpValue.arrivé;
    const dateh_dep = formVoyageUpValue.dateh_dep;
    const num_voiture = formVoyageUpValue.num_voiture;
    const num_tel = formVoyageUpValue.num_tel;
    const nbr_places = formVoyageUpValue.nbr_places;
    const prix = formVoyageUpValue.prix;
    const id = this.voyage.id;
    console.log(id);
    this.voyagesService.editVoyages({id,lieu_dep,lieu_arr,dateh_dep,num_voiture,num_tel,nbr_places,prix}).subscribe( res => {
        this.router.navigate(['/voyages']).then();
      },error => {
          console.log('error Posting voyage!');
      }
    )
  }
}
