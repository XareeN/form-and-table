import { Component, OnInit, } from '@angular/core';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  newPerson: People;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.currentMessage.subscribe(person => this.newPerson = person);
  }

  submitData(data) {
    this.peopleService.changePerson(this.newPerson);
    data.reset();
  }

}
