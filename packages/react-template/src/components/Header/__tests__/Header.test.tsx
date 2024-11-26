import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router';
import { Header } from '../Header';

describe('Header Component', () => {
  it('should render the Header component correctly', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });
});
