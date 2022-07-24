import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  U_LOGGIN,
  U_PIN,
  U_SEL,
  U_GENERIC,
  U_ZONE
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};





export const setLoggin = (loggin) => {
  return {
    type: U_LOGGIN,
    payload: loggin,
  };
};

export const setPinTo = (pin) => {
  return {
    type: U_PIN,
    payload: pin,
  };
};

export const setSelZone = (zone) => {
  return {
    type: U_SEL,
    payload: zone,
  };
};

export const setGeneric = (generic) => {
  return {
    type: U_GENERIC,
    payload: generic,
  };
};

export const setZone = (zone) => {
  return {
    type: U_ZONE,
    payload: zone,
  };
};
