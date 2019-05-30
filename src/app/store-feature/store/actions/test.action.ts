import { Action } from '@ngrx/store';
import { TestModel } from 'src/app/models/test.model';

export const GET_TESTS      = '[TEST] Get';
export const REMOVE_TEST    = '[TEST] Remove';
export const ADD_TEST    = '[TEST] Add';

export class GetTestAction implements Action {
    type: string = GET_TESTS;

    constructor(public payload: number) { }
}

export class RemoveTestAction implements Action {
    type: string = REMOVE_TEST;

    constructor(public payload: number) { }
}

export class AddTestAction implements Action {
    type: string = ADD_TEST;

    constructor(public payload: TestModel) { }
}

export type Actions = GetTestAction | RemoveTestAction | AddTestAction;
