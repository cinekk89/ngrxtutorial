import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from '../store-feature/store/actions/tutorial.actions';
import { tutorialSelectors } from '../store-feature/store/selectors/tutorial.selector';

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
        select(tutorialSelectors.selectedAllTutorials)
        );
   }

  ngOnInit() {
    this.store.dispatch(new TutorialActions.LoadTutorials());
  }

  removeTutorial(id: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial({ id: id }));
  }

  chooseToUpdate(id: number) {
    this.store.dispatch(new TutorialActions.SetTutorial({ id: id }));
  }
}
