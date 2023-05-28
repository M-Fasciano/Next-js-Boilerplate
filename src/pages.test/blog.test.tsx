import { render, screen } from '@testing-library/react';

import Blog from '@/pages/blog';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Blog page', () => {
  describe('Render method', () => {
    it('should have two paragraphs of `Lorem ipsum`', () => {
      render(<Blog />);

      const paragraph = screen.getByText(/Lorem ipsum/);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
