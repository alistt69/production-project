import { StateSchema } from 'app/providers/store';

export const getProfile = (state: StateSchema) => state?.profile;
