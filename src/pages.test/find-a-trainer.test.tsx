import { render, screen } from '@testing-library/react';

import FindATrainer from '@/pages/find-a-trainer/find-a-trainer';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Find a trainer page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<FindATrainer />);

      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
    });
  });
});
