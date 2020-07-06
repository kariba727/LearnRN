//src/components/pages/Home/index.tst
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  );
}
