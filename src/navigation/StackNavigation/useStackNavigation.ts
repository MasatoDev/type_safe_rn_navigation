import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {ParamListType, TabType} from '../TabNavigation/tabScreens';
import {TabNavigationProp} from '../TabNavigation/useTabNavigation';

export type StackNavigationProp<T extends TabType> = CompositeNavigationProp<
  TabNavigationProp,
  NativeStackNavigationProp<ParamListType<T>>
>;

export function useStackNavigation<T extends TabType>() {
  return useNavigation<StackNavigationProp<T>>();
}
