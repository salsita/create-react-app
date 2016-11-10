import { call, put } from 'redux-saga/effects';

import buildAction from '../helpers/buildAction';
import * as ActionTypes from '../constants/actionTypes';
import * as ApiEffects from '../effects/api';
import * as EntityRepositorySaga from './entityRepositorySaga';
import * as Schema from '../schema';

export function* onSayHello() {
  const user = yield call(ApiEffects.fetchUser);
  const userId = yield EntityRepositorySaga.store(user, Schema.UserSchema);
  yield put(buildAction(ActionTypes.USER_FETCHED, userId));
}