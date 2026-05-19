import image from '@Demo/ui/assets/images/templatePlugins.png';
import { demoAppRoutes } from '@Demo/ui/routing/demoAppRoutes';
import { NavLink } from '@Demo/ui/components/NavLink/NavLink';
import classes from './DemoHome.module.scss';

export const DemoHome = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bigTitleStyle}>
        Welcome to Your React Starter Kit <span>Clean Architecture</span>
      </div>

      <div className={classes.foo}>Vertical slices, shared kernel, and explicit composition.</div>

      <div className={classes.paragraphContainer}>
        <h1 className={classes.titleStyle}>Overview</h1>
        <div className={classes.infoSection}>
          <span className={classes.centredText}>
            <p className={classes.paragraphStyle}>
              This template now starts from a <span className={classes.highlight}>Clean Architecture</span> inspired
              structure with a dedicated <span className={classes.boldText}>app</span> bootstrap layer, a{' '}
              <span className={classes.boldText}>shared</span> common layer, and a{' '}
              <span className={classes.boldText}>demo</span> bounded context.
            </p>
            <p className={classes.paragraphStyle}>
              The goal is to help you start from explicit architecture choices while still keeping a runnable example
              project that demonstrates routing, form handling, data fetching, and dependency injection.
            </p>
          </span>
        </div>
      </div>
      <img src={image} alt="Template architecture overview" className={classes.imagePlace} />

      <div className={classes.paragraphContainer}>
        <h1 className={classes.titleStyle}>Folder Structure</h1>
        <div className={classes.infoSection}>
          <div className={classes.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>Folder</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={classes.boldText}>app</span>
                  </td>
                  <td>Application bootstrap, routing, providers, config, and global assets.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>shared</span>
                  </td>
                  <td>Reusable common code with no demo-specific responsibility.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>demo</span>
                  </td>
                  <td>Example bounded context split into ui, application, domain, and infrastructure.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={classes.paragraphContainer}>
        <h1 className={classes.titleStyle}>Pedagogical Demos</h1>
        <div className={classes.infoSection}>
          <p className={classes.paragraphStyle}>
            Each page below demonstrates a different aspect of the template. The React Query example resolves its use
            case through Inversify, the React Hook Form example stays focused on UI composition, and the dependency
            injection example makes the layer boundaries explicit.
          </p>
        </div>

        <div className={classes.infoSection}>
          <p className={classes.paragraphStyle}>
            <span className={classes.boldText}>React Query demo: </span>
            fetches remote users through a repository and a use case.
          </p>
          <div className={classes.demoStyle}>
            <NavLink to={demoAppRoutes.reactQuery} className={classes.a}>
              Run demo
            </NavLink>
          </div>
        </div>

        <div className={classes.infoSection}>
          <p className={classes.paragraphStyle}>
            <span className={classes.boldText}>React Hook Form demo: </span>
            shows a form-first UI example inside the new bounded context.
          </p>
          <div className={classes.demoStyle}>
            <NavLink to={demoAppRoutes.reactHookForm} className={classes.a}>
              Run demo
            </NavLink>
          </div>
        </div>

        <div className={classes.infoSection}>
          <p className={classes.paragraphStyle}>
            <span className={classes.boldText}>Dependency injection demo: </span>
            explains how app, shared, and demo collaborate through explicit abstractions.
          </p>
          <div className={classes.demoStyle}>
            <NavLink to={demoAppRoutes.dependencyInjection} className={classes.a}>
              Run demo
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
