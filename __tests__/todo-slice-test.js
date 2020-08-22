import todos, {add, remove, toggle} from '../src/redux/todo-slice';

it('should add todo to the store', () => {
  expect(
    todos(
      {items: []},
      {
        type: add.type,
        payload: {
          key: 'abc',
          text: 'Add a redux test',
          completed: false,
        },
      },
    ),
  ).toEqual({
    items: [
      {
        key: 'abc',
        text: 'Add a redux test',
        completed: false,
      },
    ],
  });
});

it('should remove todo from store', () => {
  expect(
    todos(
      {
        items: [
          {
            key: 'abc',
            text: 'Add a redux test',
            completed: false,
          },
        ],
      },
      {
        type: remove.type,
        payload: 'abc',
      },
    ),
  ).toEqual({
    items: [],
  });
});

it('should toggle todo state', () => {
  expect(
    todos(
      {
        items: [
          {
            key: 'abc',
            text: 'Add a redux test',
            completed: false,
          },
        ],
      },
      {
        type: toggle.type,
        payload: 'abc',
      },
    ),
  ).toEqual({
    items: [
      {
        key: 'abc',
        text: 'Add a redux test',
        completed: true,
      },
    ],
  });
});
