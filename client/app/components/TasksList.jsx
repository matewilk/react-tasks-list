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
      return (a, b) => new Date(a[sortParam]) - new Date(b[sortParam])
    case 'name':
      return (a, b) => (a[sortParam] < b[sortParam]) ? -1 : 1;
    default:
      return (a, b) => a[sortParam] - b[sortParam]
  }
};

export default connect(
  state => ({
    tasks: [...state.tasks].sort(sortFn(state.sort))
  })
)(TasksList);