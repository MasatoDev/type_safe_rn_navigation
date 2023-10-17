import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack/lib/typescript/src/types';

/* Screen Map Type */
export type StackNavigationScreens<T extends string> = {
  [key in T]: {
    name: string;
    component: React.ComponentType<any>;
    options?: NativeStackNavigationOptions;
  };
};
export type TabNavigationScreens<T extends string> = {
  [key in T]: {
    name: string;
    component: React.ComponentType<any>;
    options?: BottomTabNavigationOptions;
  };
};
