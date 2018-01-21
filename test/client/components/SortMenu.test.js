import React from 'react';
import { Provider } from 'react-redux';

import SortMenu from '../../../client/app/components/SortMenu';

describe('<SortMenu /> UI Component', () => {

  let wrapper;
  const _store = {
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn(() =>
      ({
        sort: 'date',
        onSort: () => {}
      }))
  };

  beforeAll(() => wrapper = global.mount(
    <Provider store={_store}>
      <SortMenu />
    </Provider>
  ));

  it('renders options menu', () => {
    expect(
      wrapper
        .find('option')
        .length
    ).toBe(2)
  })
});