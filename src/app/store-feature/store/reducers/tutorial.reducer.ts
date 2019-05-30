import { Tutorial } from 'src/app/models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { State } from '@ngrx/store';

export interface TutorialState extends EntityState<Tutorial> {
    selectedTutId: number;
}

export const adapter: EntityAdapter<Tutorial> = createEntityAdapter<Tutorial>();
export const initialState: TutorialState = adapter.getInitialState({
    selectedTutId: 0,
});

export const initialTutorials: Tutorial[] = [
    {
        id: 1,
        name: 'Initial Tutorial',
        url: 'http://google.com'
    },
    {
        id: 2,
        name: 'New Tutorial',
        url: 'http://wp.com'
    }
];

export function tutorialReducer(state: TutorialState = initialState, action: TutorialActions.Actions): TutorialState {
    debugger;
    switch (action.type) {
        case TutorialActions.TUTORIALS_LOADED:
            return adapter.addMany(action.payload.tutorials, state);
        case TutorialActions.ADD_TUTORIAL:
            return adapter.addOne(action.payload.tutorial, state);
        case TutorialActions.UPDATE_TUTORIAL:
            return adapter.upsertOne(action.payload.tutorial, state);
        case TutorialActions.REMOVE_TUTORIAL:
            return adapter.removeOne(action.payload.id, state);
        case TutorialActions.SET_TUTORIAL:
            return {
                ...state,
                selectedTutId: action.payload.id
            };
        default:
            return state;
    }
}

export const getSelectedTutorialId = (state: TutorialState) => state.selectedTutId;

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();
export const selectTutorialIds = selectIds;
export const selectTutorialEntities = selectEntities;
export const selectAllTutorials = selectAll;

