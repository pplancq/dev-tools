import ReactDOM from "react-dom";

const React = globalThis.React;
const values = ["first", "second"];

export const MissingKey = () => values.map((value) => <span>{value}</span>);
export const ArrayIndexKey = () => values.map((value, index) => <span key={index}>{value}</span>);

const ExampleContext = React.createContext(null);
ExampleContext.displayName = "ExampleContext";
export const UnstableContextValue = () => (
  <ExampleContext.Provider value={{ enabled: true }}>
    <span />
  </ExampleContext.Provider>
);
export const MissingContextDisplayName = React.createContext(null);

export const LeakedConditionalRender = ({ count }: { count: number }) => <div>{count && <span />}</div>;

const spreadProps = { key: "spread" };
export const KeyAfterSpread = () => <span {...spreadProps} key="explicit" />;

export const ParentWithNestedComponent = () => {
  const Nested = () => <span />;
  return <Nested />;
};

export const MissingDisplayName = React.memo(() => <span />);
export const CommentTextNode = () => <div>// comment</div>;
export const ChildrenProp = () => <div children="content" />;
export const UselessFragment = () => (
  <>
    <span />
  </>
);
export const NamespacedElement = () => <svg:path />;
export const UnknownDomProperty = () => <div class="example" />;
export const VoidElementWithChildren = () => <img src="example.png">content</img>;
export const MissingButtonType = () => <button>Continue</button>;
export const ResetButton = () => <button type="reset">Reset</button>;
export const ScriptUrl = () => <a href="javascript:void(0)">Open</a>;
export const UnsafeTargetBlank = () => (
  <a href="https://example.com" target="_blank">
    Open externally
  </a>
);
export const UnusedStateHook = () => {
  const [unused, setUnused] = React.useState(false);
  return (
    <button type="button" onClick={() => setUnused(true)}>
      Update
    </button>
  );
};
export const DangerousHtml = () => <div dangerouslySetInnerHTML={{ __html: "content" }} />;
export const DangerousHtmlWithChildren = () => (
  <div dangerouslySetInnerHTML={{ __html: "content" }}>content</div>
);
export const CurlyBracePresence = () => <span title={"title"} />;
export const NonSelfClosingElement = () => <span></span>;

export const ConditionalHook = ({ enabled }) => {
  if (enabled) {
    React.useState(false);
  }
  return null;
};

export const MissingHookDependency = ({ count }) => {
  React.useEffect(() => console.log(count), []);
  return null;
};

export const RenderedValue = ReactDOM.render(<span />, document.createElement("div"));
ReactDOM.hydrate(<span />, document.createElement("div"));

class LegacyComponent extends React.Component {
  state = { count: 0, unused: true };

  componentWillMount() {}

  componentWillReceiveProps() {}

  componentDidUpdate() {
    this.setState({ count: this.state.count + 1 });
  }

  componentWillUpdate() {
    this.setState({ count: 1 });
  }

  increment() {
    this.state.count = this.state.count + 1;
    this.setState({ count: this.state.count + 1 });
    ReactDOM.findDOMNode(this);
  }

  unusedMethod() {}

  render() {
    return <span>{this.state.count}</span>;
  }
}

export const LegacyComponentReference = LegacyComponent;
