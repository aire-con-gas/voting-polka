import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ParticipantAliasComponent } from './participant-alias/participant-alias.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { VotingStageComponent } from './voting-stage/voting-stage.component';
import { VotingResultComponent } from './voting-result/voting-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantAliasComponent,
    ParticipantListComponent,
    StatusBarComponent,
    VotingStageComponent,
    VotingResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
