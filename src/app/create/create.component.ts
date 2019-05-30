import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as TutorialActions from '../store/actions/tutorial.actions';
import { Tutorial } from '../models/tutorial.model';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { tutorialSelectors } from '../store/selectors/tutorial.selector';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {
  subsctiption: Subscription;
  tutorial: Tutorial;

  constructor(
    private store: Store<AppState>
    ) { }

  addTutorial(id: number, name: string, url: string): void {
    const tutorial: Tutorial = {
      id: +id,
      name: name,
      url: url,
    };

    this.store.dispatch(new TutorialActions.AddTutorial({tutorial: tutorial}));
  }

  updateTutorial(id: number, name: string, url: string): void {
    const tutorial: Tutorial = {
      id: +id,
      name: name,
      url: url,
    };

    this.store.dispatch(new TutorialActions.UpdateTutorial({ tutorial: tutorial }));
  }

  ngOnInit() {
    this.subsctiption = combineLatest(
      this.store.select(tutorialSelectors.selectedTutorialId),
      this.store.select(tutorialSelectors.selectedAllTutorials)
      ).subscribe(([id, tutorials]) => {
        this.tutorial = tutorials.find(tut => tut.id === id);
      });
  }

  ngOnDestroy(): void {
    this.subsctiption.unsubscribe();
  }
}
