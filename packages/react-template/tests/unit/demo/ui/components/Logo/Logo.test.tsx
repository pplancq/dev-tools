import { Logo } from '@Demo/ui/components/Logo';
import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { axe } from 'vitest-axe';

describe('<Logo />', () => {
  it('should', async () => {
    const { container } = render(<Logo src="foo" alt="bar" />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
