import { TestModel } from './models/test.model';
import { TutorialState } from './reducers/tutorial.reducer';

export interface AppState {
    readonly tutorials: TutorialState;
    readonly test: TestModel[];
}