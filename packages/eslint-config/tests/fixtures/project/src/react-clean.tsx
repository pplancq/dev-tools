const React = globalThis.React;
const items = ["first", "second"];
const stableContextValue = { enabled: true };
const CleanContext = React.createContext(stableContextValue);
CleanContext.displayName = "CleanContext";

export const CleanComponent = () => (
  <main>
    <img src="logo.png" alt="" />
    <button type="button">Continue</button>
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      Open safely
    </a>
    <span title="title" />
  </main>
);

export const CleanList = () => items.map((item) => <span key={item}>{item}</span>);

export const SafeConditionalRender = ({ count }: { count: number }) => (
  <div>{count > 0 ? <span /> : null}</div>
);

export const StableContextProvider = () => (
  <CleanContext.Provider value={stableContextValue}>
    <span />
  </CleanContext.Provider>
);

export const NamedMemo = React.memo(function NamedMemoComponent() {
  return <span />;
});

export const UsedStateHook = () => {
  const [count, setCount] = React.useState(0);
  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

export const CleanClassComponent = class CleanClassComponent extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <button type="button" onClick={this.increment}>
        {this.state.count}
      </button>
    );
  }
};
