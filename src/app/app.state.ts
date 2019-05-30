import { TutorialState } from './store-feature/store/reducers/tutorial.reducer';

export interface AppState {
    readonly tutorials: TutorialState;
}