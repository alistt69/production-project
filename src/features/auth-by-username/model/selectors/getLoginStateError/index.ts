import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState';

export const getLoginStateError = createSelector(getLoginState, (loginState) => loginState?.error);
