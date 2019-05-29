import { Action } from '@ngrx/store';
import { Tutorial } from 'src/app/models/tutorial.model';

export const ADD_TUTORIAL           = '[TUTORIAL] Add';
export const UPDATE_TUTORIAL        = '[TUTORIAL] Update';
export const REMOVE_TUTORIAL        = '[TUTORIAL] Remove';
export const GET_TUTORIAL           = '[TUTORIAL] Get';

export const SET_TUTORIAL           = '[TUTORIAL] Set';

export class SetTutorial implements Action {
    readonly type = SET_TUTORIAL;

    constructor(public payload: { id: number }) { }
}

export class GetTutorial implements Action {
    readonly type = GET_TUTORIAL;
}

export class UpdateTutorial implements Action {
    readonly type = UPDATE_TUTORIAL;

    constructor(public payload: { tutorial: Tutorial }) { }
}

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;

    constructor(public payload: { tutorial: Tutorial }) { }
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;

    constructor(public payload: { id: number }) { }
}

export type Actions = GetTutorial
 | AddTutorial
 | UpdateTutorial
 | RemoveTutorial
 | SetTutorial;
