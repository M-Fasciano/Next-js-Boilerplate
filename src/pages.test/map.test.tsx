import { render, screen } from '@testing-library/react';

import Map from '@/pages/map';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Map page', () => {
  describe('Render method', () => {
    it('should have an input field tag', () => {
      render(<Map />);

      expect(screen.getByDisplayValue('')).toBeInTheDocument();
    });
  });
});
