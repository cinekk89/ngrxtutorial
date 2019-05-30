import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
     TutorialState,
     selectTutorialIds,
     selectTutorialEntities,
     selectAllTutorials,
     getSelectedTutorialId
     } from '../reducers/tutorial.reducer';


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

export const selectedTutorialId = createSelector(
    selectTutorialState,
    getSelectedTutorialId
)

export const tutorialSelectors = {
    selectTutorialState,
    selectedTutorialIds,
    selectedTutorialEntities,
    selectedAllTutorials,
    selectedTutorialId
};
