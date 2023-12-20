import classes from './Logo.module.css';

type LogoProps = {
  src: string;
  alt: string;
  size?: string;
};

export const Logo = ({ src, alt, size = '80px' }: LogoProps) => {
  return <img className={classes.logoStyle} style={{ width: size }} src={src} alt={alt} />;
};
