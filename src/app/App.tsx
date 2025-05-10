import React from 'react';
import { useAppDispatch } from 'app/providers/store';
import { userActions } from 'entities/user';
import { classNames } from 'shared/lib/classes';
import { useTheme } from 'app/providers/theme';
import './styles/index.scss';

interface AppProps {
  children?: React.ReactNode;
}

const App = ({ children }: AppProps) => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('root', {}, [theme])}>
      {children}
      <div id="portal-root"></div>
    </div>
  );
};

export default App;