import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile';

export const getProfileForm = createSelector(getProfile, (profile) => profile?.form);
