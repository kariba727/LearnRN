import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DETAIL} from '../../../constants/path';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Statistics() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Statistics</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>go to detail</Text>
      </TouchableOpacity>
    </View>
  );
}
