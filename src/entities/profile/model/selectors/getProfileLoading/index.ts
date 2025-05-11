import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile';

export const getProfileLoading = createSelector(getProfile, (profile) => profile?.isLoading);
