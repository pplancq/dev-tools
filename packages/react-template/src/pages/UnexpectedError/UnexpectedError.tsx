import logo from '@Front/assets/images/logo.png';
import { Logo } from '@Front/ui/atoms/Logo';
import { Link, useRouteError } from 'react-router-dom';

import classes from './UnexpectedError.module.css';

export const UnexpectedError = () => {
  const error: unknown = useRouteError();

  return (
    <div className={classes.root}>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as Error)?.message || (error as { statusText?: string })?.statusText}</i>
      </p>
    </div>
  );
};
