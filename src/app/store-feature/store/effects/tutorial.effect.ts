import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as TutorialActions from '../actions/tutorial.actions';
import { TutorialService } from '../../../services/tutorial.service';
import { Tutorial } from 'src/app/models/tutorial.model';

@Injectable({providedIn: 'root'})
export class TutorialEffects {
    @Effect() loadTutorials$ = this.actions$.pipe(
        ofType(TutorialActions.LOAD_TUTORIALS),
        switchMap((action: TutorialActions.LoadTutorials) =>
            this.tutorialsService.all()
            .pipe(map((res: Tutorial[]) => new TutorialActions.TutorialsLoaded({ tutorials: res })))
        )
    );

    @Effect() addTutorial$ = this.actions$.pipe(
        ofType(TutorialActions.ADD_TUTORIAL),
        switchMap((action: TutorialActions.AddTutorial) =>
            this.tutorialsService.add(action.payload.tutorial)
            .pipe(map((res: Tutorial) => new TutorialActions.TutorialsAdded({ tutorial: res })))
        )
    );

    @Effect() updateTutorial$ = this.actions$.pipe(
        ofType(TutorialActions.UPDATE_TUTORIAL),
        switchMap((action: TutorialActions.UpdateTutorial) =>
            this.tutorialsService.update(action.payload.tutorial)
            .pipe(map((res: Tutorial) => new TutorialActions.TutorialsUpdated({ tutorial: res })))
        )
    );

    @Effect() removeTutorial$ = this.actions$.pipe(
        ofType(TutorialActions.REMOVE_TUTORIAL),
        switchMap((action: TutorialActions.RemoveTutorial) =>
            this.tutorialsService.remove(action.payload.id)
            .pipe(map((res: number) => new TutorialActions.TutorialsRemoved({ tutorialId: res })))
        )
    );

    constructor(
        private actions$: Actions,
        private tutorialsService: TutorialService
    ) {
     }
}
