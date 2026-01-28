(async () => {
  if (import.meta.env.FRONT_MOCK_ENABLE === 'true') {
    const { worker } = await import('@Mocks/browser');
    await worker.start({
      onUnhandledRequest: 'warn',
    });
  }

  const { default: AppReact } = await import('./bootstrap');
  customElements.define('app-react', AppReact);
})();
