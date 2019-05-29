import { Tutorial } from './models/tutorial.model';
import { TestModel } from './models/test.model';
import { TutorialState } from './reducers/tutorial.reducer';

export interface AppState {
    readonly tutorial: TutorialState;
    readonly test: TestModel[];
}
