import { useDemoUsersQuery } from '@Demo/ui/hooks/useDemoUsersQuery/useDemoUsersQuery';
import classes from './ReactQueryDemo.module.scss';

export const ReactQueryDemo = () => {
  const { data = [], isLoading, isError } = useDemoUsersQuery();

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
          management, caching, data invalidation, and loading state handling. In this template the query calls a use
          case resolved through Inversify, which keeps the UI layer independent from the infrastructure adapter.
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
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(eachResult => (
                    <tr key={eachResult.id}>
                      <td>{eachResult.id}</td>
                      <td>{eachResult.name}</td>
                      <td>{eachResult.username}</td>
                      <td>{eachResult.email}</td>
                      <td>{eachResult.website}</td>
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
