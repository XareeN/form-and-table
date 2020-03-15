import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {

  people: People[];
  person: People;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
    this.updatePeople();
  }

  getPeople(): void {
    this.peopleService.getPeople()
      .subscribe(ppl => this.people = ppl);
  }

  updatePeople(): void {
    this.peopleService.currentMessage
      .subscribe((person) => {
        this.person = person;
        console.log(this.person);
      });
    this.people.push(this.person);
    console.log(this.people);
  }


}
