import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState';

export const getLoginStateLoading = createSelector(getLoginState, (loginState) => loginState?.isLoading);
