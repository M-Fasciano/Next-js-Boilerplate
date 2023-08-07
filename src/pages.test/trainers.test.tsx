import { render, screen } from '@testing-library/react';

import Trainers from '@/pages/trainers';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Trainers page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<Trainers />);

      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
    });
  });
});
