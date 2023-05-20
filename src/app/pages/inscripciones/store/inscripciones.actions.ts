import { createAction, props } from '@ngrx/store';

export const loadInscripcioness = createAction(
  '[Inscripciones] Load Inscripcioness'
);

export const loadInscripcionessSuccess = createAction(
  '[Inscripciones] Load Inscripcioness Success',
  props<{ data: any }>()
);

export const loadInscripcionessFailure = createAction(
  '[Inscripciones] Load Inscripcioness Failure',
  props<{ error: any }>()
);
