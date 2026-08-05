import logo from "@Demo/ui/assets/images/logo.png";
import { Logo } from "@Demo/ui/components/Logo/Logo";
import { demoAppRoutes } from "@Demo/ui/routing/demoAppRoutes";
import { Link } from "react-router";

import classes from "./DemoFooter.module.css";

export const DemoFooter = () => (
  <div className={classes.container}>
    <hr />
    <Link to={demoAppRoutes.home}>
      <Logo size="50px" src={logo} alt="logo" />
    </Link>
  </div>
);
