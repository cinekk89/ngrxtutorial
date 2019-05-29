import { Tutorial } from './models/tutorial.model';
import { TestModel } from './models/test.model';
import { TutorialState, selectTutorialIds, selectTutorialEntities, selectAllTutorials } from './reducers/tutorial.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    readonly tutorials: TutorialState;
    readonly test: TestModel[];
}

export const selectTutorialState = createFeatureSelector<TutorialState>('tutorials');

export const selectedTutorialIds = createSelector(
    selectTutorialState,
    selectTutorialIds
);

export const selectedTutorialEntities = createSelector(
    selectTutorialState,
    selectTutorialEntities
);

export const selectedAllTutorials = createSelector(
    selectTutorialState,
    selectAllTutorials
);
