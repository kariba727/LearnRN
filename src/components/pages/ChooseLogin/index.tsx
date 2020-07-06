//src/components/pages/ChooseLogin/index.tst
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIGN_UP, SIGN_IN} from '../../../constants/path';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function ChooseLogin() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Choose Login</Text>
      <TouchableOpacity onPress={() => navigate(SIGN_IN)}>
        <Text>go to sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(SIGN_UP)}>
        <Text>go to sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
