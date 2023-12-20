import { ReactNode } from 'react';
import classes from './Header.module.css';

type HeaderProps = {
  leftComponents?: ReactNode;
  rightComponents?: ReactNode;
};

export const Header = ({ leftComponents, rightComponents }: HeaderProps) => {
  return (
    <header className={classes.header}>
      {leftComponents}
      {rightComponents}
    </header>
  );
};
