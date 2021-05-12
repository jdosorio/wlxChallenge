import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   technologies: reducers.TechnologiesState
}

export const appReducers: ActionReducerMap<AppState> = {
  technologies: reducers.technologiesReducer
}
