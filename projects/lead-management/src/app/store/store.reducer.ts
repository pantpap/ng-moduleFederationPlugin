import { Action, createReducer, on } from '@ngrx/store';
import * as StoreActions from './store.actions';

export const storeFeatureKey = 'leadManagement';

export interface LeadManagementState {
  test: string;
}

export const initialState: LeadManagementState = {
  test: 'Pantelis'
};


const _leadManagementReducer = createReducer(
  initialState,

  on(StoreActions.loadStores, state => state),
  on(StoreActions.loadStoresSuccess, (state, action) => state),
  on(StoreActions.loadStoresFailure, (state, action) => state),
  on(StoreActions.setTestValue, state => state),
);

export function leadManagementReducer(state: LeadManagementState | undefined, action: Action) {
  return _leadManagementReducer(state, action);
}

