import React from 'react';
import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import { useModal } from 'shared/ui/modal/hook';
import { LoginModal } from 'features/auth-by-username';
import { useAppDispatch, useAppSelector } from 'app/providers/store';
import { getUserAuthData, userActions } from '../../../entities/user';

interface NavbarProps {
  className?: string;
}

export const Navbar = React.memo(({ className }: NavbarProps) => {
  const { isOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();
  const authData = useAppSelector(getUserAuthData);

  const onToggleModal = React.useCallback(() => {
    openModal();
  }, [openModal]);

  console.log(isOpen);

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <h1>PP</h1>
      {authData ? (
        <AppButton theme={AppButtonTheme.BACKGROUND_INVERTED} onClick={onLogout}>
          Sign Out
        </AppButton>
      ) : (
        <>
          <AppButton theme={AppButtonTheme.BACKGROUND_INVERTED} onClick={onToggleModal}>
            Sign In
          </AppButton>

          <LoginModal isOpen={isOpen} onClose={closeModal} />
        </>
      )}
    </div>
  );
});

Navbar.displayName = 'Navbar';
