import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile';

export const getProfileData = createSelector(getProfile, (profile) => profile?.data);
