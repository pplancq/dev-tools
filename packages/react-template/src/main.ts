import AppReact from './bootstrap';

if (import.meta.env.FRONT_MOCK_ENABLE === 'true') {
  const { worker } = await import('@Mocks/browser');
  await worker.start({
    onUnhandledRequest: 'warn',
  });
}

customElements.define('app-react', AppReact);
