import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  useNavigation,
  NavigationContainer,
  DrawerActions,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Main() {
  const {dispatch} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>main</Text>
      <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
        <Text>open drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

function Sub() {
  const {dispatch} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>sub</Text>
      <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
        <Text>open drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Sub" component={Sub} />
    </Drawer.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
