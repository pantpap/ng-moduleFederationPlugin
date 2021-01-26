import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as LeadManagementReducer from './store.reducer'
import * as LeadManagementActions from './store.actions'

@Injectable({providedIn: 'root'})
export class LeadManagementFacade{

  constructor(private store: Store<LeadManagementReducer.LeadManagementState>) {}

  setTestValue(value: string) {
    this.store.dispatch(LeadManagementActions.setTestValue({value}))
  }

}
