import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState';

export const getLoginStatePassword = createSelector(getLoginState, (loginState) => loginState?.password);
