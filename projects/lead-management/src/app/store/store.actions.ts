import { createAction, props } from '@ngrx/store';

export const loadStores = createAction(
  '[Store] Load Stores'
);

export const loadStoresSuccess = createAction(
  '[Store] Load Stores Success',
  props<{ data: any }>()
);

export const loadStoresFailure = createAction(
  '[Store] Load Stores Failure',
  props<{ error: any }>()
);

export const setTestValue = createAction('[Lead Management] Set test value', props<{value: string}>());
