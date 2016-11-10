import { createSelector } from 'reselect';
import { map } from 'lodash';

import { getEntityRepository as getState } from './';

export const getCountries = createSelector(
  getState,
  state => state.Country
);

export const getUsers = createSelector(
  getState,
  getCountries,
  (state, countries) => map(state.User, user => ({
    ...user,
    country: countries[user.country]
  })).reduce((memo, user) => {
    memo[user.id] = user;
    return memo;
  }, {})
);
