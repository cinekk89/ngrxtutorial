import { Injectable } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor() { }

  all(): Observable<Tutorial[]> {
    debugger;
    const tutorials: Observable<Tutorial[]> = of([
      {
          id: 1,
          name: 'Initial Tutorial',
          url: 'http://google.com'
      },
      {
          id: 2,
          name: 'New Tutorial',
          url: 'http://wp.com'
      }]);

    return tutorials;
  }
}
