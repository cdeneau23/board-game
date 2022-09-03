import { render } from '@testing-library/react';

import Subheader from './subheader';

describe('Subheader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Subheader />);
    expect(baseElement).toBeTruthy();
  });
});
