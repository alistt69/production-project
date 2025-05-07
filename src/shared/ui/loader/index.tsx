import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { LoadingOutlined } from '@ant-design/icons';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(classes.loader, {}, [className])}>
      <LoadingOutlined />
    </div>
  );
};
