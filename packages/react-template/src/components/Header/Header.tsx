import logo from '@Front/assets/images/logo.png';
import { Logo } from '@Front/ui/atoms/Logo';
import { Navigation } from '@Front/ui/molecules/Navigation';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';

export const Header = () => {
  return (
    <div className={classes.container}>
      <Link to="/">
        <Logo size="50px" src={logo} alt="logo" />
      </Link>
      <Navigation links={[{ label: 'Demo', url: '/' }]} />
    </div>
  );
};
