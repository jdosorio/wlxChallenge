import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as technologiesActions from '../actions/technologies.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { TechnologiesService } from '../../services/technologies.service';
import { of } from 'rxjs';

@Injectable()
export class TechnologiesEffects {

    constructor(
        private actions$: Actions,
        private technologiesService: TechnologiesService
    ){}


    loadTechnologies$ = createEffect(
        () => this.actions$.pipe(
            ofType( technologiesActions.loadTechnologies ),
            mergeMap(
                () => this.technologiesService.getList()
                    .pipe(
                        map( technologies => technologiesActions.loadTechnologiesSuccess({ technologies: technologies }) ),
                        catchError( err => of(technologiesActions.loadTechnologiesError({ payload: err })) )
                    )
            )
        )
    );

}
