import { Footer } from '@Front/components/Footer';
import { Header } from '@Front/components/Header';
import { MainTemplate } from '@Front/ui/templates/MainTemplate';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <MainTemplate headerProps={{ leftComponents: <Header /> }} footerProps={{ footerContent: <Footer /> }}>
      <Outlet />
    </MainTemplate>
  );
};
