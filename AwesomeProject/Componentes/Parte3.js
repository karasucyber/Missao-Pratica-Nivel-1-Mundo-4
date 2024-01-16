import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const NewFlatList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Alice' },
          { key: 'Bob' },
          { key: 'Charlie' },
          { key: 'David' },
          { key: 'Eve' },
          { key: 'Frank' },
          { key: 'Grace' },
          { key: 'Henry' },
          { key: 'Ivy' },
          { key: 'Jack' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default NewFlatList;
