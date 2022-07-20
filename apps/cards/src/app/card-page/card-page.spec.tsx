import { render } from '@testing-library/react';

import CardPage from './card-page';

describe('CardPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardPage />);
    expect(baseElement).toBeTruthy();
  });
});
