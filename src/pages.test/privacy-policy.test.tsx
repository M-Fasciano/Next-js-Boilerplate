import { render, screen } from '@testing-library/react';

import PrivacyPolicy from '@/pages/privacy-policy';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Privacy policy page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<PrivacyPolicy />);

      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
    });
  });
});
