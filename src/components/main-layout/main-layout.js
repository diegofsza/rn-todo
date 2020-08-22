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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    <View style={styles.mainContainer}>
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
          <FontAwesome
            style={[styles.icon, {color: 'green'}]}
            name={'plus-circle'}
          />
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
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => _toggleTodo(item.key)}>
              <FontAwesome
                style={[styles.icon, {color: 'blue'}]}
                name={item.completed ? 'check-circle' : 'circle-o'}
              />
            </TouchableOpacity>
            <Text style={{flex: 1}}>{item.text}</Text>
            <TouchableOpacity onPress={() => _removeTodo(item.key)}>
              <FontAwesome
                style={[styles.icon, {color: 'red'}]}
                name={'minus-circle'}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 40,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 24,
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
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
