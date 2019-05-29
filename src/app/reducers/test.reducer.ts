import { TestModel } from 'src/app/models/test.model';
import * as TestActions from '../actions/test.action';


const initialState: TestModel = {
    id: 1,
    author: 'Jan Brzechwa',
    name: 'Nowy test'
}

export function testReducer(state: TestModel[] = [initialState], action: TestActions.Actions) {
    switch(action.type) {
        case TestActions.ADD_TEST:
            return [...state, action.payload];
            break;
        default:
            return state;
    }
}