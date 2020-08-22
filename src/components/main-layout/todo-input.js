import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../../redux/todo-slice';

export function TodoInput() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  const [addBtnDisabled, setAddBtnDisabled] = useState(true);

  const _addTodo = () => {
    dispatch(add({key: new Date().getTime(), text: todo, completed: false}));
    setTodo('');
    setAddBtnDisabled(true);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.todoInput}
        placeholder={'Enter a new TO DO item'}
        onChangeText={(todoText) => {
          setTodo(todoText);
          setAddBtnDisabled(todoText.length === 0);
        }}
        value={todo}
      />
      <TouchableOpacity onPress={() => _addTodo()} disabled={addBtnDisabled}>
        <FontAwesome
          style={[styles.icon, {color: addBtnDisabled ? 'gray' : 'green'}]}
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
