import { Action } from '@ngrx/store';
import { Tutorial } from 'src/app/models/tutorial.model';

export const ADD_TUTORIAL           = '[TUTORIAL] Add';
export const UPDATE_TUTORIAL        = '[TUTORIAL] Update';
export const REMOVE_TUTORIAL        = '[TUTORIAL] Remove';
export const SET_TUTORIAL           = '[TUTORIAL] Set';
export const LOAD_TUTORIALS         = '[TUTORIAL] Load';
export const TUTORIALS_LOADED       = '[TUTORIAL] Loaded';
export const TUTORIALS_ADDED        = '[TUTORIAL] Added';
export const TUTORIALS_UPDATED      = '[TUTORIAL] Updated';
export const TUTORIALS_REMOVED      = '[TUTORIAL] Removed';

export class LoadTutorials implements Action {
    readonly type = LOAD_TUTORIALS;

    // constructor(public payload: { tutorials: Tutorial[] }) { }
}

export class SetTutorial implements Action {
    readonly type = SET_TUTORIAL;

    constructor(public payload: { id: number }) { }
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

export class TutorialsLoaded implements Action {
    readonly type = TUTORIALS_LOADED;

    constructor(public payload: { tutorials: Tutorial[] }) { }
}

export class TutorialsAdded implements Action {
    readonly type = TUTORIALS_ADDED;

    constructor(public payload: { tutorial: Tutorial }) { }
}

export class TutorialsUpdated implements Action {
    readonly type = TUTORIALS_UPDATED;

    constructor(public payload: { tutorials: Tutorial }) { }
}

export class TutorialsRemoved implements Action {
    readonly type = TUTORIALS_REMOVED;

    constructor(public payload: { tutorials: Tutorial }) { }
}

export type Actions = LoadTutorials
    | AddTutorial
    | UpdateTutorial
    | RemoveTutorial
    | SetTutorial
    | TutorialsLoaded
    | TutorialsAdded
    | TutorialsUpdated
    | TutorialsRemoved;
