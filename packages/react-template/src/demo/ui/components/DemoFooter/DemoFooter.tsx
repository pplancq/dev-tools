import logo from '@Demo/ui/assets/images/logo.png';
import { demoAppRoutes } from '@Demo/ui/routing/demoAppRoutes';
import { Logo } from '@Demo/ui/components/Logo/Logo';
import { Link } from 'react-router';

import classes from './DemoFooter.module.css';

export const DemoFooter = () => {
  return (
    <div className={classes.container}>
      <hr />
      <Link to={demoAppRoutes.home}>
        <Logo size="50px" src={logo} alt="logo" />
      </Link>
    </div>
  );
};
