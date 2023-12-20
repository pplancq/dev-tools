import image from '@Front/assets/images/templatePlugins.png';
import { approutes } from '@Front/routing/appRoutes';
import { NavLink } from '@Front/ui/atoms/NavLink';
import classes from './Demo.module.scss';

export const Demo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bigTitleStyle}>
        Welcome to Your React Starter Kit
        <span>Welcome</span>
      </div>

      <div className={classes.foo}>FlexBlug</div>

      <div className={classes.paragraphContainer}>
        <h1 className={classes.titleStyle}>Overview</h1>
        <div className={classes.infoSection}>
          <span className={classes.centredText}>
            <p className={classes.paragraphStyle}>
              <span className={classes.highlight}>Congratulations</span> on starting your project with our{' '}
              <span className={classes.highlight}>React Starter Kit!</span> This kit is designed to jumpstart your
              development with a well-organized project structure and pre-configured tools.
            </p>
            <p className={classes.paragraphStyle}>
              Below, you'll find an overview of the key features, tools, and architecture used in this starter kit.
            </p>
          </span>
        </div>
      </div>
      <img src={image} alt="template" className={classes.imagePlace} />

      <div className={classes.paragraphContainer}>
        <h1 className={classes.titleStyle}>Objective</h1>
        <div className={classes.infoSection}>
          <p className={classes.paragraphStyle}>
            The goal of this <span className={classes.boldText}>starter kit</span> is to enable you to quickly start a
            new project with all the necessary tools.
          </p>
          <p className={classes.paragraphStyle}>
            Additionally, this <span className={classes.boldText}>starter kit</span> offers a robust set of options for
            structuring your <span className={classes.boldText}>React application</span>, providing flexibility to adapt
            to various project architectures.
          </p>
          <p className={classes.paragraphStyle}>
            It has been thoughtfully designed not only to expedite the initial setup but also to streamline the
            implementation of <span className={classes.highlight}>Micro-Frontends</span>, making it a versatile solution
            for projects of different scales. (for more details check the{' '}
            <span className={classes.highlight}>README.md</span> file)
          </p>
        </div>
      </div>

      <div className={classes.paragraphContainer}>
        <h1 className={classes.titleStyle}>Features</h1>
        <div className={classes.infoSection}>
          <p className={classes.paragraphStyle}>
            <span className={classes.boldText}>React: </span>A JavaScript library for building user interfaces.
          </p>
        </div>
        <div className={classes.infoSection}>
          <p className={classes.paragraphStyle}>
            <span className={classes.boldText}>TypeScript: </span>A superset of JavaScript that adds static typing.
          </p>
        </div>
        <div className={classes.infoSection}>
          <p className={classes.paragraphStyle}>
            <span className={classes.boldText}>React Query: </span>A library for managing, caching, and updating server
            state in React applications. (for more details check the{' '}
            <span className={classes.highlight}>README.md</span> file under the{' '}
            <span className={classes.boldText}>hooks</span> folder)
          </p>
          <div className={classes.demoStyle}>
            <NavLink to={approutes.reactQueryDemo} className={classes.a}>
              Run Demo
            </NavLink>
          </div>
        </div>

        <div className={classes.infoSection}>
          <p className={classes.paragraphStyle}>
            <span className={classes.boldText}>React Router: </span>A declarative routing solution for React. (for more
            details check the <span className={classes.highlight}>README.md</span> file under the{' '}
            <span className={classes.boldText}>routing</span> folder)
          </p>
        </div>
        <div className={classes.infoSection}>
          <p className={classes.paragraphStyle}>
            <span className={classes.boldText}>...and more: </span>Explore the{' '}
            <span className={classes.highlight}>Package.json</span> file to see additional dependencies.
          </p>
        </div>
      </div>

      <div className={classes.paragraphContainer}>
        <h1 className={classes.titleStyle}>Project Structure</h1>

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
                    <span className={classes.boldText}>api</span>
                  </td>
                  <td>Place your API-related code here.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>assets</span>
                  </td>
                  <td>Store your static assets (images, fonts, etc.) in this directory.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>components</span>
                  </td>
                  <td>Reusable React components go here.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>config</span>
                  </td>
                  <td>Configuration files and environment variables are managed here.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>forms</span>
                  </td>
                  <td>Define your forms using React Hook Form.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>hooks</span>
                  </td>
                  <td>Custom React hooks to share logic across components.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>pages</span>
                  </td>
                  <td>React components that represent individual pages or views.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>providers</span>
                  </td>
                  <td>React context providers for state management.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>routing</span>
                  </td>
                  <td>Configure your application routes here.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>types</span>
                  </td>
                  <td>TypeScript type definitions.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>ui</span>
                  </td>
                  <td>Presentational components and styles.</td>
                </tr>
                <tr>
                  <td>
                    <span className={classes.boldText}>utils</span>
                  </td>
                  <td>General utility functions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={classes.paragraphContainer}>
        <h1 className={classes.titleStyle}>Additional Information</h1>
        <div className={classes.infoSection}>
          <ul>
            <li>
              - Customize the project configuration in the <code>config</code> directory.
            </li>
            <li>
              - Explore the <code>utils</code> directory for utility functions.
            </li>
            <li>- Leverage React Query for efficient data fetching.</li>
            <li>- Take advantage of React Hook Form for managing forms seamlessly.</li>
            <li>
              - Refer to the <code>types</code> directory for TypeScript type definitions.
            </li>
          </ul>
        </div>
        <div className={classes.infoSection}>
          <span className={classes.centredText}>
            <p className={classes.paragraphStyle}>
              Our project is organized into various folders, each containing its own{' '}
              <span className={classes.highlight}>README.md</span> file with specific details, instructions, and
              additional information. This documentation will guide you through setting up the environment,
              understanding the project structure, and using the available components and features. For more details,
              check the <span className={classes.highlight}>README.md</span> file in{' '}
              <span className={classes.boldText}>each folder of the project</span>.
            </p>
          </span>
        </div>
        <div className={classes.infoSection}>
          <span className={classes.centredText}>
            <p className={classes.paragraphStyle}>
              Feel free to explore and modify the structure to suit your project's needs.{' '}
              <span className={classes.boldText}>Happy coding!</span>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};
