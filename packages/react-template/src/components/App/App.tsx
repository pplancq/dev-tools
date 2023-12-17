type AppProps = {
  basename?: string;
};

export const App = ({ basename }: AppProps) => {
  return <div>App {basename}</div>;
};
