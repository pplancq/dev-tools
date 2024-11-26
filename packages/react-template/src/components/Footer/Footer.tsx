import logo from '@Front/assets/images/logo.png';
import { Logo } from '@Front/ui/atoms/Logo';
import { Link } from 'react-router';

import classes from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={classes.container}>
      <hr />
      <Link to="/">
        <Logo size="50px" src={logo} alt="logo" />
      </Link>
    </div>
  );
};
