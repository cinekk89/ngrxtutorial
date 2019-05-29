import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from '../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(
    private store: Store<AppState>,
    ) {
    this.tutorials = store.select(state => state.tutorial.tutorial);
   }

  ngOnInit() {
  }

  removeTutorial(id: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial({id: id}));
    
  }

  chooseToUpdate(id: number) {
    this.store.dispatch(new TutorialActions.SetTutorial({ id: id }));
  }
}
