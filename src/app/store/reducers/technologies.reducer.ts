/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Action, createReducer, on } from '@ngrx/store';
import { loadTechnologies, loadTechnologiesError, loadTechnologiesSuccess } from '../actions';
import { EnumTechnologyItems } from '../../screens/technologies/interfaces/technology.interface';

export interface TechnologiesState {
    technologies: EnumTechnologyItems;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const technologiesInitialState: TechnologiesState = {
    technologies  : [],
    loaded : false,
    loading: false,
    error  : null
};

const technologiesReducerApp = createReducer(technologiesInitialState,

    on( loadTechnologies, state => ({ ...state, loading: true })),


    on( loadTechnologiesSuccess, (state, { technologies }) => ({
        ...state,
        loading: false,
        loaded: true,
        technologies: [ ...technologies ]
    })),

    on( loadTechnologiesError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);

export function technologiesReducer(state: TechnologiesState | undefined, action: Action): TechnologiesState {
    return technologiesReducerApp(state, action);
}
