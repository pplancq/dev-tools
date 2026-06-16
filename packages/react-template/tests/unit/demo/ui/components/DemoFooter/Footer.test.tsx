import { DemoFooter } from '@Demo/ui/components/DemoFooter';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router';

describe('Footer Component', () => {
  it('should render the Footer component correctly', () => {
    const { container } = render(
      <Router>
        <DemoFooter />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });
});
