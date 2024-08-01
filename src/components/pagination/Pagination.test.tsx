import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <Pagination next={() => {}} previous={() => {}} currentPage={1} />
    );
    expect(container).toBeInTheDocument();
  });
});
