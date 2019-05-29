import { TestModel } from './models/test.model';
import { TutorialState } from './store/reducers/tutorial.reducer';

export interface AppState {
    readonly tutorials: TutorialState;
    readonly test: TestModel[];
}