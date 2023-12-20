import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Demo } from '../Demo';

describe('Demo Component', () => {
  it('should render the Demo component correctly', () => {
    const { container } = render(
      <Router>
        <Demo />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });
});
