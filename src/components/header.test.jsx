import { render, waitFor } from '@testing-library/react';
import Header from './header';
import { requestData } from '../utils/request-data';

describe('Test rending of components in the Header', () => {
  test('it renders the header component with rows selected', async () => {
    const { getByText } = render(
      <Header
        tableData={requestData}
        selectedRowsCount={3}
        selectedFilesToDownload={[requestData[0]]}
      />
    );
    await waitFor(() => {
      expect(getByText('Selected 3')).toBeInTheDocument(); // dashboard header value
      expect(getByText('Download Selected')).toBeInTheDocument(); // download btn
    });
  });
});
