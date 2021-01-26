import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibModule } from 'projects/core-lib/src/lib/core-lib.module';
import { RemoteModule } from './remote.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects } from './store/store.effects';
import {StoreModule} from '@ngrx/store';
import {leadManagementReducer} from './store/store.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {MaterialModule} from './material/material.module';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RemoteModule,
    CoreLibModule,
    MaterialModule,
    StoreModule.forRoot(leadManagementReducer),
    EffectsModule.forRoot([StoreEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
