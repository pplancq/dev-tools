import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { axe } from 'vitest-axe';
import { Logo } from '../Logo';

describe('<Logo />', () => {
  it('should', async () => {
    const { container } = render(<Logo src="foo" alt="bar" />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
