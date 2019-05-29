import { Component, OnInit, OnChanges } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as TutorialActions from '../actions/tutorial.actions';
import { Tutorial } from '../models/tutorial.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  tutorial$: Observable<Tutorial>;

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
    this.tutorial$ = this.store.select(state => state.tutorial.selectedTut);
  }
}
