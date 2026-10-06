import AppHTMLElement from "@App/AppHTMLElement";

if (import.meta.env.FRONT_MOCK_ENABLE === "true") {
  const { worker } = await import("@Mocks/browser");
  await worker.start({
    onUnhandledFrame: "warn",
  });
}

customElements.define("app-react", AppHTMLElement);
