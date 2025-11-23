import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('2nd Deliverable', () => {
  test('adds a new plant when the form is submitted', async () => {
    global.setFetchResponse(global.basePlants);

    const { findByPlaceholderText, findByText } = render(<App />);

    // Wait for form inputs (avoids act() warning)
    const nameInput = await findByPlaceholderText('Plant name');
    const imageInput = await findByPlaceholderText('Image URL');
    const priceInput = await findByPlaceholderText('Price');

    // 1st Plant
    const firstPlant = { name: 'foo', image: 'foo_plant_image_url', price: '10' };
    global.setFetchResponse(firstPlant);

    await userEvent.type(nameInput, firstPlant.name);
    await userEvent.type(imageInput, firstPlant.image);
    await userEvent.type(priceInput, firstPlant.price);

    await userEvent.click(await findByText('Add Plant'));

    expect(fetch).toHaveBeenCalledWith("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(firstPlant),
    });

    const newPlant = await findByText('foo');
    expect(newPlant).toBeInTheDocument();

    // 2nd Plant
    const secondPlant = { name: 'bar', image: 'bar_plant_image_url', price: '5' };
    global.setFetchResponse(secondPlant);

    await userEvent.clear(nameInput);
    await userEvent.clear(imageInput);
    await userEvent.clear(priceInput);

    await userEvent.type(nameInput, secondPlant.name);
    await userEvent.type(imageInput, secondPlant.image);
    await userEvent.type(priceInput, secondPlant.price);

    await userEvent.click(await findByText('Add Plant'));

    expect(fetch).toHaveBeenCalledWith("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(secondPlant),
    });

    const nextPlant = await findByText('bar');
    expect(nextPlant).toBeInTheDocument();
  });
});
