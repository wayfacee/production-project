import { classNames } from "shared/lib/classNames/classNames";
import * as cl from './Navbar.module.scss'
import { AppLinkTheme, AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cl.Navbar, {}, [className])}>
      <div className={cl.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cl.mainLink}>Main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
      </div>
    </div>
  );
};