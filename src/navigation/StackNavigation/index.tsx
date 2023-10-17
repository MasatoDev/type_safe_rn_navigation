import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';

import {commonScreenOptions} from 'src/navigation/constant';
import {homeTabScreens} from './screens/homeTabScreens';
import {searchTabScreens} from './screens/searchTabScreens';
import {myPageTabScreens} from './screens/myPageTabScreens';

export const initialHomeTabScreen = 'Home';
export const initialMyPageTabScreen = 'MyPage';
export const initialSearchTabScreen = 'Search';

export const HomeStackNavigation: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={initialHomeTabScreen}
      screenOptions={commonScreenOptions}>
      {Object.keys(homeTabScreens).map((key: string) => {
        const screen = homeTabScreens[key as keyof typeof homeTabScreens];
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export const MyPageStackNavigation: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={initialMyPageTabScreen}
      screenOptions={commonScreenOptions}>
      {Object.keys(myPageTabScreens).map((key: string) => {
        const screen = myPageTabScreens[key as keyof typeof myPageTabScreens];
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export const SearchStackNavigation: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={initialSearchTabScreen}
      screenOptions={commonScreenOptions}>
      {Object.keys(searchTabScreens).map((key: string) => {
        const screen = searchTabScreens[key as keyof typeof searchTabScreens];
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};
