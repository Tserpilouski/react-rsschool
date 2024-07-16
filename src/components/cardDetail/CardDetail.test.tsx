import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardDetail from './CardDetail';
import { BrowserRouter as Router } from 'react-router-dom';

describe('CardDetail Component', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <Router>
        <CardDetail />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });
});
