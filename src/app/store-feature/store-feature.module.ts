import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { tutorialReducer } from './store/reducers/tutorial.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TutorialEffects } from './store/effects/tutorial.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('tutorials', tutorialReducer),
    EffectsModule.forFeature([TutorialEffects])
  ]
})
export class StoreFeatureModule { }
