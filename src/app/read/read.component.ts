import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from '../actions/tutorial.actions';
import { initialTutorials, TutorialState } from '../reducers/tutorial.reducer';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial[]>;

  constructor(
    private store: Store<AppState>,
    ) {
      this.tutorials$ = store.pipe(
        select('tutorials'),
        map(data => data.entities),
        map(data => Object.keys(data).map(k => data[k]))
        );
   }

  ngOnInit() {
    this.store.dispatch(new TutorialActions.LoadTutorials({ tutorials: initialTutorials }));
  }

  removeTutorial(id: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial({ id: id }));
  }

  chooseToUpdate(id: number) {
    this.store.dispatch(new TutorialActions.SetTutorial({ id: id }));
  }
}
