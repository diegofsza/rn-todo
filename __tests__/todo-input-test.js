import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {TextInput, TouchableOpacity} from 'react-native';
import {act} from 'react-native-testing-library';
import renderer from 'react-test-renderer';

import {TodoInput} from '../src/components/main-layout/todo-input';
import {store} from '../src/redux/store';

let todoInputRenderer;
let todoInputInstance;

beforeEach(() => {
  todoInputRenderer = renderer.create(
    <Provider store={store}>
      <TodoInput />
    </Provider>,
  );
  todoInputInstance = todoInputRenderer.root;
});

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <TodoInput />
    </Provider>,
  );
});

it('add button disabled if no text entered', () => {
  expect(
    todoInputInstance.findByType(TouchableOpacity).props.disabled,
  ).toBeTruthy();
});

it('add button enabled if text entered', () => {
  const input = todoInputInstance.findByType(TextInput);
  act(() => input.props.onChangeText('new todo'));
  expect(
    todoInputInstance.findByType(TouchableOpacity).props.disabled,
  ).toBeFalsy();
});
