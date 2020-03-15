import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { People } from './people';
import { PEOPLE } from './mock-people';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private newPersonData = new BehaviorSubject<People>({
    name: '',
    surname: '',
    age: null,
    pesel: null,
    postalCode: '',
    city: '',
    street: ''
  });
  currentMessage = this.newPersonData.asObservable();

  constructor() { }

  getPeople(): Observable<People[]> {
    return of(PEOPLE);
  }

  // addPerson(person: Person): Observable<Person> {
  //   return null;
  // }

  changePerson(person: People) {
    this.newPersonData.next(person);
  }
}
