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

export default connect(
  state => ({
    tasks: state.tasks
  })
)(TasksList);