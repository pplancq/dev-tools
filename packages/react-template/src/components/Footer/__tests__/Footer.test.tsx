import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router';
import { Footer } from '../Footer';

describe('Footer Component', () => {
  it('should render the Footer component correctly', () => {
    const { container } = render(
      <Router>
        <Footer />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });
});
