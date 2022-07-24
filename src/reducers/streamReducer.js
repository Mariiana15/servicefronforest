import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,

  U_LOGGIN,
  U_PIN,
  U_SEL,
  U_GENERIC,
  U_ZONE
} from "../actions/types";

const INTIAL_STATE = {
  isloggin: null,
  pin: null,
  zone: null,
  generic: null,
  zoneDetail: null

};
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return {
        ...state, ..._.mapKeys(action.payload, "id")
      };
    case FETCH_STREAM:
      return {
        ...state, [action.payload.id]: action.payload
      };
    case CREATE_STREAM:
      return {
        ...state, [action.payload.id]: action.payload
      };
    case EDIT_STREAM:
      return {
        ...state, [action.payload.id]: action.payload
      };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case U_LOGGIN:
      return {
        ...state, isloggin: action.payload
      };
    case U_PIN:
      return {
        ...state, pin: action.payload
      };
    case U_SEL:
      return {
        ...state, zone: action.payload
      };
    case U_GENERIC:
      return {
        ...state, generic: action.payload
      };
    case U_ZONE:
      return {
        ...state, zoneDetail: action.payload
      };


    default:
      return state;
  }
};
export default streamReducer;