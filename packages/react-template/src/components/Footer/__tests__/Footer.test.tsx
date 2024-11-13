import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from '../Footer';

describe('Footer Component', () => {
  it('should render the Footer component correctly', () => {
    const { container } = render(
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Footer />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });
});
