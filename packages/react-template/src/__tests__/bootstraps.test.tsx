import { App } from '@Front/components/App';
import { waitFor } from '@testing-library/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, type Mock, vi } from 'vitest';
import bootstrap from '../bootstrap';

vi.mock('@Front/components/App', () => ({
  App: () => <div data-testid="app-mock">AppMock</div>,
}));

vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(),
}));

describe('bootstrap', () => {
  let container: HTMLElement;
  const render = vi.fn();
  const unmount = vi.fn();
  (createRoot as Mock).mockImplementation(() => ({
    render,
    unmount,
  }));

  customElements.define('bootstrap-html-element', bootstrap);

  beforeEach(() => {
    container = document.createElement('bootstrap-html-element');
  });

  afterEach(() => {
    container.remove();
  });

  it('should mount the React component in the custom element', () => {
    document.body.appendChild(container);

    expect(createRoot as Mock).toHaveBeenCalledWith(expect.anything());
    expect(render).toBeCalledWith(
      <StrictMode>
        <App basename="" />
      </StrictMode>,
    );
    expect(unmount).not.toHaveBeenCalled();
  });

  it('should unmount the React component when removed from the DOM', async () => {
    document.body.appendChild(container);

    expect(unmount).not.toHaveBeenCalled();

    container.remove();

    await waitFor(() => {
      expect(unmount).toHaveBeenCalledWith();
    });
  });

  it('should not unmount when element is removed and re-added to the DOM', async () => {
    document.body.appendChild(container);
    container.remove();
    document.body.appendChild(container);

    expect(unmount).not.toHaveBeenCalled();
  });
});
