import { Footer } from '@Front/ui/organisms/Footer';
import { Header } from '@Front/ui/organisms/Header';
import { MainContent } from '@Front/ui/organisms/MainContent';
import { PropsWithChildren, ReactNode } from 'react';

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
      <Header {...headerProps} />
      <MainContent>{children}</MainContent>
      <Footer {...footerProps} />
    </div>
  );
};
