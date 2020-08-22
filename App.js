/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
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
              data: [
                {
                  key: '1',
                  text: 'Buy coffee',
                },
              ],
            },
            {
              title: 'Done',
              data: [
                {
                  key: '2',
                  text: 'Pick up the boys!',
                },
              ],
            },
          ]}
          renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
          renderItem={({item}) => <Text>{item.text}</Text>}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {},
  todoInput: {},
});

export default App;
