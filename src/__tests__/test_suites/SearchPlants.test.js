import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('4th Deliverable', () => {
  test('filters plants by name on search', async () => {
    global.setFetchResponse(global.basePlants);

    const { 
      getByPlaceholderText, 
      queryAllByTestId,
      findByText 
    } = render(<App />);

    // 🔥 Fix: wait for initial fetch + state update
    await findByText(global.basePlants[0].name);

    const searchInput = getByPlaceholderText('Type a name to search...');

    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'aloe');

    await waitFor(() => {
      const filteredPlants = queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(1);
    });

    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'p');

    await waitFor(() => {
      const filteredPlants = queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(3);
    });
  });
});
