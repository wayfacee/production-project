import { classNames } from "shared/lib/classNames/classNames";
import * as cl from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cl.Loader, {}, [className])}>
      {/* ринг лоадер если б стилев много было */}
    </div>
  );
};