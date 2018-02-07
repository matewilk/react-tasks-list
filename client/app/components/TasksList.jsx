import React from 'react';
import { connect } from 'react-redux';

import Task from './Task';

const TasksList = ({tasks=[]}) =>
  <div className='abc'>
    {
      tasks.map((item) =>
        <Task key={item.id} {...item}/>
      )
    }
  </div>;

const sortFn = (sortParam) => {
  switch(sortParam) {
    case 'date':
      return (a, b) => {
        return new Date(a[sortParam]) - new Date(b[sortParam])
      };
    case 'name':
      return (a, b) => (a[sortParam] < b[sortParam]) ? -1 : 1;
    default:
      return (a, b) => a[sortParam] - b[sortParam]
  }
};

const filterFn = (filter) => {
  return (task) => {
    return filter !== '' ?
      task.name.indexOf(filter) > -1 || task.date.indexOf(filter) > -1 :
      true;
  }
};

export default connect(
  state => {
    let res = [...state.tasks]
      .sort(sortFn(state.sort))
      .filter(filterFn(state.filter));
    return {
      tasks: res
    }

  }
)(TasksList);