import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {TodoItem} from './todo-item';
import {SectionHeader} from './section-header';
import {TodoInput} from './todo-input';

export function MainLayout() {
  const items = useSelector((state) => state.items);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>RN Todo APP</Text>
      <TodoInput />
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
          <SectionHeader title={title} />
        )}
        renderItem={({item}) => <TodoItem item={item} />}
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
  icon: {
    fontSize: 24,
    marginHorizontal: 10,
  },
});
