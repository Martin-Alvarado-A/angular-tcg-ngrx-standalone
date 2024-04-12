import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1)
);

/**
 * Old original way to create a reducer.
 */
// export function counterReducer(state = initialState): number {
//   return initialState;
// }
