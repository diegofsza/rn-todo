import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../../redux/todo-slice';

export function TodoInput() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();

  const _addTodo = () => {
    dispatch(add({key: new Date().getTime(), text: todo, completed: false}));
    setTodo('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.todoInput}
        placeholder={'Enter a new TO DO item'}
        onChangeText={(todoText) => setTodo(todoText)}
        value={todo}
      />
      <TouchableOpacity onPress={() => _addTodo()}>
        <FontAwesome
          style={[styles.icon, {color: 'green'}]}
          name={'plus-circle'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 10,
  },
});
