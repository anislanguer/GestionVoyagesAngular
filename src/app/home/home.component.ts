import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedDepart = new EventEmitter();
  selectedArrive = new EventEmitter();
  selectedDate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sortVoyagesDepart($event: Event) {
    const depart=$event.target['options'][$event.target['options'].selectedIndex].text;
    this.selectedDepart.next(depart);
  }

  sortVoyageArrive($event: Event) {
    const arrive=$event.target['options'][$event.target['options'].selectedIndex].text;
    this.selectedArrive.next(arrive);
  }

  sortVoyagesDate($event: Event) {
    const date=$event.target.value;
    this.selectedDate.next(date);
  }
}
