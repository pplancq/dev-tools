import type { GetArchitecturePrinciplesUseCaseInterface } from '@Demo/application/use-cases/GetArchitecturePrinciplesUseCaseInterface';
import { DEMO_SERVICES } from '@Demo/serviceIdentifiers';
import { useService } from '@Shared/ui/hooks/useService/useService';
import classes from './DependencyInjectionDemo.module.scss';

export const DependencyInjectionDemo = () => {
  const getArchitecturePrinciplesUseCase = useService<GetArchitecturePrinciplesUseCaseInterface>(
    DEMO_SERVICES.GetArchitecturePrinciplesUseCase,
  );
  const architecturePrinciples = getArchitecturePrinciplesUseCase.execute();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Dependency Injection</h1>
      <hr className={classes.lineStyle} color="#00008f" />

      <div className={classes.fieldsetStyle}>
        <p className={classes.paragraph}>
          This page is driven by a use case resolved from the Inversify container. The page knows the use case contract,
          but it does not instantiate infrastructure classes directly.
        </p>

        <h1 className={classes.dataTitle}>Clean Architecture Principles</h1>
        <div className={classes.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Principle</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {architecturePrinciples.map(principle => (
                <tr key={`${principle.layer}-${principle.title}`}>
                  <td>{principle.layer}</td>
                  <td>{principle.title}</td>
                  <td>{principle.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
