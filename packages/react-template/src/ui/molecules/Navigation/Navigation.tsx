import { NavLink } from '@Front/ui/atoms/NavLink';
import { useId } from 'react';
import classes from './Navigation.module.css';

type NavigationProps = {
  links: { label: string; url: string }[];
};

export const Navigation = ({ links }: NavigationProps) => {
  const id = useId();

  return (
    <nav>
      <ul className={classes.navList}>
        {links.map(link => (
          <li key={`${id} ${link.label} ${link.url}`}>
            <NavLink to={link.url} className={classes.a}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
