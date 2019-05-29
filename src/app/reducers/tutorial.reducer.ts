import { Tutorial } from 'src/app/models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

// export interface TutorialState {
//     tutorials: Tutorial[];
//     selectedTut: Tutorial;
// }

export interface TutorialState extends EntityState<Tutorial> {
    selectedTut: Tutorial;
    // tutorials: Tutorial[];
}

export const adapter: EntityAdapter<Tutorial> = createEntityAdapter<Tutorial>();
export const initialState: TutorialState = adapter.getInitialState({
    selectedTut: null,
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


// const initialTutorial: Tutorial = {
//     id: 1,
//     name: 'Initial Tutorial',
//     url: 'http://google.com'
// };

// export const initialState: TutorialState = {
//     tutorials: [initialTutorial],
//     selectedTut: null
// };

export function tutorialReducer(state: TutorialState = initialState, action: TutorialActions.Actions): TutorialState {
    debugger;
    switch (action.type) {
        case TutorialActions.LOAD_TUTORIALS:
            return adapter.addMany(action.payload.tutorials, state);
        case TutorialActions.ADD_TUTORIAL:
            return adapter.addOne(action.payload.tutorial, state);
        case TutorialActions.UPDATE_TUTORIAL:
            return adapter.upsertOne(action.payload.tutorial, state);
        case TutorialActions.REMOVE_TUTORIAL:
            return adapter.removeOne(action.payload.id, state);
        case TutorialActions.SET_TUTORIAL:
        case TutorialActions.GET_TUTORIALS:
        default:
            return state;
    }
}