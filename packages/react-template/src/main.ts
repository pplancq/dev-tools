import('./bootstrap').then(({ default: AppReact }) => {
  customElements.define('app-react', AppReact);
});
