import type { PropsWithChildren, ReactNode } from 'react';

import classes from './MainTemplate.module.css';

type MainTemplateProps = {
  headerProps: {
    leftComponents?: ReactNode;
    rightComponents?: ReactNode;
  };
  footerProps: {
    footerContent?: ReactNode;
  };
};

export const MainTemplate = ({ headerProps, footerProps, children }: PropsWithChildren<MainTemplateProps>) => {
  return (
    <div className={classes.mainTemplateStyle}>
      <header className={classes.header}>
        {headerProps.leftComponents}
        {headerProps.rightComponents}
      </header>
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>{footerProps.footerContent}</footer>
    </div>
  );
};
