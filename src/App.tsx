import React from 'react';
import * as UiContext from './contexts/ui';
import {View, Text, StyleSheet} from 'react-native';
import Routes from './routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  const [applicationState, setApplicationState] = React.useState(
    UiContext.createApplicationInitialState(),
  );
  return (
    <UiContext.Context.Provider value={{applicationState, setApplicationState}}>
      <Routes />
    </UiContext.Context.Provider>
  );
}
