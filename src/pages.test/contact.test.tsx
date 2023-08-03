import { render, screen } from '@testing-library/react';

import Contact from '@/pages/contact';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Contact page', () => {
  describe('Render method', () => {
    it('should have two paragraphs of `Lorem ipsum`', () => {
      render(<Contact />);

      const heading = screen.getByRole('heading', { name: /contact/i });

      expect(heading).toBeInTheDocument();
    });
  });
});
