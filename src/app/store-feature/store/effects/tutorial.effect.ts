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

    constructor(
        private actions$: Actions,
        private tutorialsService: TutorialService
    ) {
     }
}