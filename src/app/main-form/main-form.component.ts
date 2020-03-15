import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { People } from '../people';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  newPerson: People;

  @Output() emitPerson = new EventEmitter<People>();

  constructor() { }

  ngOnInit(): void {
  }

  submitData(data) {
    this.newPerson = data.value;
    this.emitPerson.emit(this.newPerson);
    data.reset();
  }

}
