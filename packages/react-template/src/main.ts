const enableMock = async () => {
  if (import.meta.env.FRONT_MOCK_ENABLE === 'true') {
    const { worker } = await import('@Mocks/browser');

    return worker.start({
      onUnhandledRequest: 'warn',
    });
  }

  return undefined;
};

await enableMock();
const { default: AppReact } = await import('./bootstrap');
customElements.define('app-react', AppReact);
