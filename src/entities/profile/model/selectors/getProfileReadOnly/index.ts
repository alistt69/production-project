import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile';

export const getProfileReadOnly = createSelector(getProfile, (profile) => profile?.readonly);
