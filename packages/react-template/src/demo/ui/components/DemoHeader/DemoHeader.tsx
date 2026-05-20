import logo from '@Demo/ui/assets/images/logo.png';
import { DemoNavigation } from '@Demo/ui/components/DemoNavigation/DemoNavigation';
import { demoAppRoutes } from '@Demo/ui/routing/demoAppRoutes';
import { Logo } from '@Demo/ui/components/Logo/Logo';
import { Link } from 'react-router';

import classes from './DemoHeader.module.css';

export const DemoHeader = () => {
  return (
    <div className={classes.container}>
      <Link to={demoAppRoutes.home}>
        <Logo size="50px" src={logo} alt="logo" />
      </Link>
      <DemoNavigation
        links={[
          { label: 'Overview', url: demoAppRoutes.home },
          { label: 'React Query', url: demoAppRoutes.reactQuery },
          { label: 'React Hook Form', url: demoAppRoutes.reactHookForm },
          { label: 'Dependency Injection', url: demoAppRoutes.dependencyInjection },
        ]}
      />
    </div>
  );
};
