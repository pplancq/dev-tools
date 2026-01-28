const enableMock = async () => {
  if (import.meta.env.FRONT_MOCK_ENABLE === 'true') {
    const { worker } = await import('@Mocks/browser');

    return worker.start({
      onUnhandledRequest: 'warn',
    });
  }

  return undefined;
};

enableMock().then(() => {
  import('./bootstrap').then(({ default: AppReact }) => {
    customElements.define('app-react', AppReact);
  });
});
