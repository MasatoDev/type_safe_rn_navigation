import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {tabScreens} from './tabScreens';

const Tab = createBottomTabNavigator();
const initialRouteName = 'HomeNavigation';

export const TabNavigation: FC = () => {
  return (
    <Tab.Navigator initialRouteName={initialRouteName}>
      {Object.keys(tabScreens).map((key: string) => {
        const screen = tabScreens[key as keyof typeof tabScreens];
        return (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </Tab.Navigator>
  );
};
