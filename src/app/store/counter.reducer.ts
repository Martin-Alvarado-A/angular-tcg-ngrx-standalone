import { createReducer } from '@ngrx/store';

const initialState = 0;

// export const counterReducer = createReducer(initialState);

/**
 * Old original way to create a reducer.
 */
export function counterReducer(state = initialState): number {
  return initialState;
}
