import { createAction, props } from '@ngrx/store';
import { EnumTechnologyItems } from '../../screens/technologies/interfaces/technology.interface';

export const loadTechnologies = createAction('[Technologies] Load Technologies');

export const loadTechnologiesSuccess = createAction(
    '[Technologies] Load Technologies Success',
    props<{ technologies: EnumTechnologyItems }>()
);

export const loadTechnologiesError = createAction(
    '[Technologies] Load Technologies Error',
    props<{ payload: any }>()
);

