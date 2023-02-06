import { put, takeLatest } from "redux-saga/effects";
import { DELETE, GET, PATCH, POST } from "../api/axios";
import { ACTIONS } from "../constants/constant";
import { deleteUser, editUser, putUser, removeUser, setUser } from "./action";

export function* watcherSaga() {
  yield takeLatest(ACTIONS.GET_USER, handleGetUser);
  yield takeLatest(ACTIONS.UPDATE_USER, handleUpdateUser);
  yield takeLatest(ACTIONS.DELETE_USER, handleDeleteUser);
  yield takeLatest(ACTIONS.ADD_USER, handleAddUser);
}
export function* handleGetUser() {
  try {
    let data;
    yield GET("/users").then((res) => {
      data = res.data;
      return res;
    });
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateUser(action) {
  try {
    let data;
    // {action.payload.id ,action.payload.finaldata} = action;
    yield PATCH(
      `/users/${action.payload.finaldata.id}`,
      action.payload.finaldata
    ).then((res) => {
      console.log("patch req", res.data);
      data = res.data;
      return res;
    });

    console.log("Data", data);
    yield put(editUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteUser(action) {
  try {
    yield DELETE(`/users/${action.payload}`).then((res) => {
      return res;
    });
    yield put(removeUser(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddUser(action) {
  try {
    yield POST("/users", action.payload).then((res) => {
      console.log("new data", res.finaldata);
      return res;
    });
    yield put(putUser(action.payload));
  } catch (error) {
    console.log(error);
  }
}
