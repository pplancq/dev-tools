import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router';
import { DemoHeader } from '../DemoHeader';

describe('Header Component', () => {
  it('should render the Header component correctly', () => {
    const { container } = render(
      <Router>
        <DemoHeader />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });
});
