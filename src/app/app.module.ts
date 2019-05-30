import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreFeatureModule } from './store-feature/store-feature.module';
import { AppEffects } from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreFeatureModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({maxAge: 10})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
