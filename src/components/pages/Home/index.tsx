//src/components/pages/Home/index.tst
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DETAIL, INPUT} from '../../../constants/path';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>go to detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(INPUT)}>
        <Text>open input</Text>
      </TouchableOpacity>
    </View>
  );
}
