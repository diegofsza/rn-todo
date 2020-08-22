import React from 'react';
import {SectionList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';

export function MainLayout() {
  const todoItems = useSelector((state) => state.todo);
  const doneItems = useSelector((state) => state.done);

  return (
    <>
      <View>
        <Text style={styles.header}>RN Todo APP</Text>
      </View>
      <TextInput
        style={styles.todoInput}
        placeholder={'Enter a new TO DO item'}
      />
      <SectionList
        sections={[
          {
            title: 'To Do',
            data: todoItems,
          },
          {
            title: 'Done',
            data: doneItems,
          },
        ]}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {},
  todoInput: {},
});
