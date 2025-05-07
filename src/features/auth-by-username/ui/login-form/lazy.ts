import { lazy, FC } from 'react';
import { LoginFormProps } from 'features/auth-by-username/ui/login-form/index';

export const LazyLoginForm = lazy<FC<LoginFormProps>>(() => import('./index'));
