import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import AddTaskForm from './AddTaskForm';
import SortMenu from './SortMenu';
import TasksList from './TasksList';

const App = () =>
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col>
          <AddTaskForm />
          <SortMenu />
          <TasksList />
        </Col>
      </Row>
    </Col>
  </Row>;

export default App;