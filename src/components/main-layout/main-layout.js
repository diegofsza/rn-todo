import React, {useState} from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {add, remove, toggle} from '../../redux/todo-slice';

export function MainLayout() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();

  const _addTodo = () => {
    dispatch(add({key: new Date().getTime(), text: todo, completed: false}));
    setTodo('');
  };
  const _removeTodo = (key) => dispatch(remove(key));
  const _toggleTodo = (key) => dispatch(toggle(key));

  return (
    <>
      <View>
        <Text style={styles.header}>RN Todo APP</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.todoInput}
          placeholder={'Enter a new TO DO item'}
          onChangeText={(todoText) => setTodo(todoText)}
          value={todo}
        />
        <TouchableOpacity onPress={() => _addTodo()}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </View>
      <SectionList
        sections={[
          {
            title: 'To Do',
            data: items.filter((i) => !i.completed),
          },
          {
            title: 'Done',
            data: items.filter((i) => i.completed),
          },
        ]}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => _toggleTodo(item.key)}>
              <Text>TOGGLE</Text>
            </TouchableOpacity>
            <Text style={{flex: 1}}>{item.text}</Text>
            <TouchableOpacity onPress={() => _removeTodo(item.key)}>
              <Text>REMOVE</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {},
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoInput: {},
});
