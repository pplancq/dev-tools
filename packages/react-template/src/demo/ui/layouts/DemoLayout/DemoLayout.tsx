import { DemoFooter } from '@Demo/ui/components/DemoFooter/DemoFooter';
import { DemoHeader } from '@Demo/ui/components/DemoHeader/DemoHeader';
import { MainTemplate } from '@Demo/ui/layouts/MainTemplate/MainTemplate';
import { Outlet } from 'react-router';

export const DemoLayout = () => {
  return (
    <MainTemplate headerProps={{ leftComponents: <DemoHeader /> }} footerProps={{ footerContent: <DemoFooter /> }}>
      <Outlet />
    </MainTemplate>
  );
};
