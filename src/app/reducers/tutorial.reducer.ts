import { Tutorial } from 'src/app/models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

export interface TutorialState {
    tutorial: Tutorial[];
    selectedTut: Tutorial;
}

const initialTutorial: Tutorial = {
    id: 1,
    name: 'Initial Tutorial',
    url: 'http://google.com'
};

export const initialState: TutorialState = {
    tutorial: [initialTutorial],
    selectedTut: null
};

export function tutorialReducer(state: TutorialState = initialState, action: TutorialActions.Actions): TutorialState {
    switch (action.type) {
        case TutorialActions.GET_TUTORIAL:
            return {
                ...state,
                selectedTut: null
            };
        case TutorialActions.ADD_TUTORIAL:
            return {
                ...state,
                tutorial: [...state.tutorial, action.payload.tutorial],
                selectedTut: null
            };
        case TutorialActions.UPDATE_TUTORIAL:
            return {
                ...state,
                selectedTut: null,
                tutorial: [...state.tutorial.map(tut => {
                    return tut.id === action.payload.tutorial.id
                    ? Object.assign({}, action.payload.tutorial)
                    : tut;
                })]
            };
        case TutorialActions.REMOVE_TUTORIAL:
            const tempStateTut = state.tutorial[action.payload.id];
            return {
                ...state,
                selectedTut: null,
                tutorial: [...state.tutorial.filter(element => element.id !== tempStateTut.id)]
            };
        case TutorialActions.SET_TUTORIAL:
            return {
                ...state,
                selectedTut: Object.assign({}, state.tutorial.find(tut => tut.id === action.payload.id))
            };
        default:
            return state;
    }
}