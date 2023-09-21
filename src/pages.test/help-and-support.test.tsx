import { render, screen } from '@testing-library/react';

import HelpAndSupport from '@/pages/help-and-support/help-and-support';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Help and support page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<HelpAndSupport />);

      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
    });
  });
});
