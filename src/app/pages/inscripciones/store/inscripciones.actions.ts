import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import {Inscription} from "../../../core/interfaces/Inscription";


export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripciones': emptyProps(),
    'Load Inscripciones Success': props<{ data: Inscription[] }>(),
    'Load Inscripciones Failure': props<{ error: unknown }>(),
  }
});
