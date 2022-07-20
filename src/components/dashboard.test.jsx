import { render, waitFor } from '@testing-library/react';
import Dashboard from './dashboard';

describe('Test rending of components in the dashboard', () => {
  test('it renders the dashboard page on load', async () => {
    const { getByText } = render(<Dashboard />);
    await waitFor(() => {
      expect(getByText('None Selected')).toBeInTheDocument(); // dashboard header value

      expect(getByText('name')).toBeInTheDocument(); // table header value
      expect(getByText('path')).toBeInTheDocument(); // table header value
    });
  });
});
