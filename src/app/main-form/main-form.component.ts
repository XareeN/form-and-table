import { Component, OnInit } from '@angular/core';
import { People } from '../people';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  person: People[];

  constructor() { }

  ngOnInit(): void {
  }

  submitData() {
    console.log('data');
  }

  clearInputs() {
    console.log('data cleared');
  }

}
