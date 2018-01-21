import C from '../constants';

export const task = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_TASK:
      return {
        id: action.id,
        name: action.name,
        date: action.date,
        disabled: true
      };

    case C.EDIT_TASK:
      return (state.id === action.id) ?
        {...state, disabled: false} :
        state;

    case C.SAVE_TASK:
      let { name, date } = action;
      return (state.id === action.id) ?
        {...state, name, date, disabled: true} :
        state;

    default:
      return state;
  }
};

export const tasks = (state = [], action) => {
  switch (action.type) {
    case C.ADD_TASK:
      return [
        ...state,
        task({}, action)
      ];

    case C.EDIT_TASK:
      return state.map(
        t => task(t, action)
      );

    case C.SAVE_TASK:
      return state.map(
        t => task(t, action)
      );


    case C.REMOVE_TASK:
      return state.filter((item) =>
        item.id !== action.id
      );

    default:
      return state;
  }
};

export const sort = (state='date', action={ type: null }) => {
  switch(action.type) {
    case C.SORT_TASKS:
      return action.sortBy;
    default:
      return state;
  }
};
