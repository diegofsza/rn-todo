import renderer from 'react-test-renderer';
import React from 'react';
import {TodoItem} from '../src/components/main-layout/todo-item';
import {store} from '../src/redux/store';
import {Provider} from 'react-redux';

it('renders', () => {
  renderer.create(
    <Provider store={store}>
      <TodoItem
        item={{
          completed: false,
          text: 'Todo item',
          key: '1',
        }}
      />
    </Provider>,
  );
});

it('renders empty circle if not completed', () => {
  const fontAwesome = renderer
    .create(
      <Provider store={store}>
        <TodoItem
          item={{
            completed: false,
            text: 'Todo item',
            key: '1',
          }}
        />
      </Provider>,
    )
    .root.findByProps({name: 'circle-o'});
  expect(fontAwesome).toBeTruthy();
});

it('renders checked circle if completed', () => {
  const fontAwesome = renderer
    .create(
      <Provider store={store}>
        <TodoItem
          item={{
            completed: true,
            text: 'Todo item',
            key: '1',
          }}
        />
      </Provider>,
    )
    .root.findByProps({name: 'check-circle'});
  expect(fontAwesome).toBeTruthy();
});
