import { render, screen } from '@testing-library/react';

import TermsOfUse from '@/pages/terms-of-use/terms-of-use';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Terms of use page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<TermsOfUse />);

      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
    });
  });
});
