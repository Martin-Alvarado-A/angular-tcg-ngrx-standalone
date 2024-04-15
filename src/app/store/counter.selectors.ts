import { createSelector } from '@ngrx/store';
import { CounterStore } from 'src/main';

export const selectCount = (state: CounterStore) => state.counter;
export const selectDoubleCount = createSelector(
  selectCount,
  (state) => state * 2
);
