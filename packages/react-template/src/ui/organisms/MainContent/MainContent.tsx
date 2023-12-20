import { PropsWithChildren } from 'react';
import classes from './MainContent.module.css';

export const MainContent = ({ children }: PropsWithChildren) => {
  return <main className={classes.main}>{children}</main>;
};
