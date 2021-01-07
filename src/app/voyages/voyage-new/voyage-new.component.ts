import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {VoyagesService} from '../../services/voyages.service';

@Component({
  selector: 'app-voyage-new',
  templateUrl: './voyage-new.component.html',
  styleUrls: ['./voyage-new.component.css']
})
export class VoyageNewComponent implements OnInit {

  voyageForm: FormGroup;
  submitted : boolean;
  formData : FormData;
  constructor(private router: Router,private formBuilder : FormBuilder,private voyagesService : VoyagesService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.voyageForm = this.formBuilder.group({
        depart: ['', Validators.required],
        arrivé: ['', Validators.required],
        dateh_dep: ['', Validators.required],
        num_voiture: ['', Validators.required],
        num_tel: ['', Validators.required],
        nbr_places: ['', Validators.required],
        prix: ['', Validators.required],

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
    this.formData = new FormData();
    this.formData.append("lieu_dep",lieu_dep);
    this.formData.append("lieu_arr",lieu_arr);
    this.formData.append("dateh_dep",dateh_dep);
    this.formData.append("num_voiture",num_voiture);
    this.formData.append("num_tel",num_tel);
    this.formData.append("nbr_places",nbr_places);
    this.formData.append("prix",prix);

    this.voyagesService.postVoyages(this.formData).subscribe( res => {
        this.router.navigate(['/voyages']).then();
      },error => {
        console.log('error Editing voyage!');
      }
    )
  }


}
