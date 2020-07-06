//src/components/pages/Loading/index.tst
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as UiContext from '../../../contexts/ui';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function ChangeStateButton(props: {state: UiContext.Status}) {
  const {setApplicationState} = React.useContext(UiContext.Context);
  const {state} = props;
  return (
    <TouchableOpacity onPress={() => setApplicationState(state)}>
      <Text>Change state to {state}</Text>
    </TouchableOpacity>
  );
}

export default function Loading() {
  return (
    <View style={styles.container}>
      <ChangeStateButton state={UiContext.Status.AUTHORIZED} />
      <ChangeStateButton state={UiContext.Status.UN_AUTHORIZED} />
      <ChangeStateButton state={UiContext.Status.FIRST_OPEN} />
      <Text>Loading</Text>
    </View>
  );
}
