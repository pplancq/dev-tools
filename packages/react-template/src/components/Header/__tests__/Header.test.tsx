import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../Header';

describe('Header Component', () => {
  it('should render the Header component correctly', () => {
    const { container } = render(
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });
});
