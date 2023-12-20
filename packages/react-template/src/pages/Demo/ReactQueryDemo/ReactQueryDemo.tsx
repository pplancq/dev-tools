import { useDemoApi } from '@Front/hooks/api/useDemoApi';
import classes from './ReactQueryDemo.module.scss';

export const ReactQueryDemo = () => {
  const { result, isLoading, isError } = useDemoApi();

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>React Query</h1>
      <hr className={classes.lineStyle} color="#00008f" />

      <div className={classes.fieldsetStyle}>
        <p className={classes.paragraph}>
          React Query is a popular library for data management in React applications. It simplifies data query
          management, caching, data invalidation, and loading state handling.
        </p>
        {isLoading ? (
          <h1 className={classes.dataTitle}>Loading...</h1>
        ) : (
          <>
            <h1 className={classes.dataTitle}>React Query Data Fetched</h1>
            <div className={classes.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {result?.map(eachResult => (
                    <tr key={eachResult.id}>
                      <td>{eachResult.id}</td>
                      <td>{eachResult.firstName}</td>
                      <td>{eachResult.lastName}</td>
                      <td>{eachResult.age}</td>
                      <td>{eachResult.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
