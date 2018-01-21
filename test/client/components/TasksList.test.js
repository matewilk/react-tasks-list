import React from 'react';
import { Provider } from 'react-redux';

import TasksList from '../../../client/app/components/TasksList';
import Task from '../../../client/app/components/Task';

describe('<TasksList /> UI Component', () => {

  let wrapper;
  const _store = {
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn(() =>
      ({
        tasks: [
          {id: 1, name: 'wash dishes', date: new Date()},
          {id: 2, name: 'learn react', date: new Date()},
          {id: 3, name: 'read book', date: new Date()}
        ]
      }))
  };

  beforeAll(() => wrapper = global.mount(
    <Provider store={_store}>
      <TasksList />
    </Provider>
  ));

  it('renders options menu', () => {
    expect(
      wrapper
        .find(Task)
        .length
    ).toBe(3)
  })
});