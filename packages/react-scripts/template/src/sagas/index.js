import { takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import * as AsyncSaga from './asyncSaga';
import * as ActionTypes from '../constants/actionTypes';

export default function* () {
  yield [
    fork(takeEvery, ActionTypes.SAY_HELLO, AsyncSaga.onSayHello)
  ];
}
