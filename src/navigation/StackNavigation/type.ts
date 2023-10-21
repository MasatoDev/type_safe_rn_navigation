import {StackNavigationOptions} from '@react-navigation/stack';

/* Screen Map Type */
export type StackNavigationScreens<T extends string> = {
  [key in T]: {
    name: T;
    component: React.ComponentType<any>;
    options?: StackNavigationOptions;
  };
};
