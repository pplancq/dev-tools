import { NavLink } from '@Demo/ui/components/NavLink/NavLink';
import { useId } from 'react';
import classes from './DemoNavigation.module.css';

type DemoNavigationProps = {
  links: { label: string; url: string }[];
};

export const DemoNavigation = ({ links }: DemoNavigationProps) => {
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
