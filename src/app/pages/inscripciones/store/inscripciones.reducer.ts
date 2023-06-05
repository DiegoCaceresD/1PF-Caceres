import {Action, createFeature, createReducer, on} from '@ngrx/store';
import {Inscription} from "../../../core/interfaces/Inscription";
import {act} from "@ngrx/effects";
import {InscripcionesActions} from "./inscripciones.actions";

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
  inscriptions: Inscription[];
  error:unknown;

}

export const initialState: State = {
  inscriptions: [],
  error:null
};

export const reducer = createReducer<State>(
  initialState,

  on( state => {
    return {
      ...state
    }
  }),
  on(InscripcionesActions.loadInscripcionesSuccess, (state, action) => {
    return {
      ...state,
      inscriptions: action.data
    }
  }),
  on(InscripcionesActions.loadInscripcionesFailure, (state, action) => {
    return{
      ...state,
      error: action.error
    }
  }),

);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});
