import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { People } from '../people';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  newPerson: People;

  @Output() emitPerson = new EventEmitter<People>();

  // static isPeselValid(control: AbstractControl): {[key: string]: any} | null {
  //     const pesel: number = control.value;
  //     const reg = /^[0-9]{11}$/;
  //     if (reg.test(pesel) === false) {
  //       return false;
  //     } else {
  //       const digits = ('' + pesel ).split('');
  //       if ((parseInt(pesel.substring( 4, 6)) > 31) || (parseInt(pesel.substring( 2, 4)) > 12)) {
  //         return false;
  //       }

  //       let checksum = (
  //         1 * parseInt(digits[0]) +
  //         3 * parseInt(digits[1]) +
  //         7 * parseInt(digits[2]) +
  //         9 * parseInt(digits[3]) +
  //         1 * parseInt(digits[4]) +
  //         3 * parseInt(digits[5]) +
  //         7 * parseInt(digits[6]) +
  //         9 * parseInt(digits[7]) +
  //         1 * parseInt(digits[8]) +
  //         3 * parseInt(digits[9])
  //         ) % 10;
  //       if (checksum === 0) {
  //         checksum = 10;
  //         checksum = 10 - checksum;
  //       }
  //       if (parseInt(digits[10]) === checksum) {
  //         return null;
  //       } else {
  //         return {isPeselValid: true};
  //       }
  //     }
  //   }

  constructor() { }

  ngOnInit(): void {
  }

  submitData(data) {
    this.newPerson = data.value;
    this.emitPerson.emit(this.newPerson);
    data.reset();
  }

  validatePesel($event) {
    console.log($event);
    const pesel: any = $event.target.value;

    const reg = /^[0-9]{11}$/;
    if (reg.test(pesel) === false) {
      return false;
    } else {
      const digits = ('' + pesel ).split('');
      if ((parseInt(pesel.substring( 4, 6)) > 31) || (parseInt(pesel.substring( 2, 4)) > 12)) {
        return false;
      }

      let checksum = (
        1 * parseInt(digits[0]) +
        3 * parseInt(digits[1]) +
        7 * parseInt(digits[2]) +
        9 * parseInt(digits[3]) +
        1 * parseInt(digits[4]) +
        3 * parseInt(digits[5]) +
        7 * parseInt(digits[6]) +
        9 * parseInt(digits[7]) +
        1 * parseInt(digits[8]) +
        3 * parseInt(digits[9])
        ) % 10;
      if (checksum === 0) {
        checksum = 10;
        checksum = 10 - checksum;
      }
      return (parseInt(digits[10]) === checksum);
    }
  }

}
