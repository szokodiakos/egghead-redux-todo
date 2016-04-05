import ReactDOM from 'react-dom';
import expect from 'expect';
import expectImmutable from 'expect-immutable';
import React from 'react';
import Immutable from 'immutable';

expect.extend(expectImmutable);

const toggleTodo = (todo) => Immutable.Map(todo)
  .set('completed', !todo.completed)
  .toJS();

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false,
  };

  const todoAfter = {
    ...todoBefore,
    completed: true,
  };

  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

const render = () => {
  ReactDOM.render(<h1>Hello</h1>,
    document.getElementById('app')
  );
};

testToggleTodo();
render();
