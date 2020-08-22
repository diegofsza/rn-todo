import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {remove, toggle} from '../../redux/todo-slice';
import {useDispatch} from 'react-redux';

export function TodoItem(props) {
  const {item} = props;
  const dispatch = useDispatch();

  const _removeTodo = (key) => dispatch(remove(key));
  const _toggleTodo = (key) => dispatch(toggle(key));

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => _toggleTodo(item.key)}>
        <FontAwesome
          style={[styles.icon, {color: 'blue'}]}
          name={item.completed ? 'check-circle' : 'circle-o'}
        />
      </TouchableOpacity>
      <Text style={[{flex: 1}, item.completed ? styles.completed : undefined]}>
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => _removeTodo(item.key)}>
        <FontAwesome
          style={[styles.icon, {color: 'red'}]}
          name={'minus-circle'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  completed: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});
