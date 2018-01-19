import C from '../client/app/constants';
import {tasks} from '../client/app/store/reducers';

describe('tasks Reducer', () => {

  it('ADD_TASK success', () => {
    const state = [];
    const action = {
      type: C.ADD_TASK,
      id: 0,
      name: 'task 1',
      date: new Date().toString()
    };

    const results = tasks(state, action);
    expect(results).toEqual([{
      id: 0,
      name: 'task 1',
      date: new Date().toString(),
      disabled: true
    }]);
  });

  it('EDIT_TASK success', () => {
    const state = [{
      id: 0,
      name: 'task 2',
      disabled: true
    }];
    const action = {
      type: C.EDIT_TASK,
      id: 0
    };

    const results = tasks(state, action);
    expect(results).toEqual([{
      id: 0,
      name: 'task 2',
      disabled: false
    }]);
  });

  it('SAVE_TASK success', () => {
    const state = [{
      id: 1,
      name: 'task 3',
      disabled: false
    }];
    const action = {
      type: C.SAVE_TASK,
      id: 1,
      name: 'task 4',
      date: new Date().toString()
    };

    const results = tasks(state, action);
    expect(results).toEqual([{
      id: 1,
      name: 'task 4',
      disabled: true,
      date: action.date
    }]);
  });

  it('REMOVE_TASK success', () => {
    const state = [{
      id: 2,
      name: 'task 5',
    }];
    const action = {
      type: C.REMOVE_TASK,
      id: 2
    };

    const results = tasks(state, action);
    expect(results).toEqual([])
  })
});