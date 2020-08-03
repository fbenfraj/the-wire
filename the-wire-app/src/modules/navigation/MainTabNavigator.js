import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../../styles';

import tabNavigationData from './tabNavigationData';

const Stack = createStackNavigator();

export default function BottomTabs() {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      headerMode={null}
    >
      {tabNavigationData.map((item, idx) => (
        <Stack.Screen 
          key={`tab_item${idx+1}`}
          name={item.name}
          component={item.component}
          options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarItemContainer}>
              <Image
                resizeMode="contain"
                source={item.icon}
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => <Text style={{ fontSize: 12, color: focused ? colors.primary : colors.gray }}>{item.name}</Text>
        }} 
        />        
      ))}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
});