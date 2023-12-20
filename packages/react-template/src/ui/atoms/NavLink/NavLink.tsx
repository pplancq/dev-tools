import { ComponentProps } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

type NavLinkProps = ComponentProps<typeof RouterNavLink>;

export const NavLink = ({ className, ...props }: NavLinkProps) => (
  <RouterNavLink {...props} className={[className].filter(Boolean).join(' ')} />
);
