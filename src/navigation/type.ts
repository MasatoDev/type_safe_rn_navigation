/**
 * @see https://reactnavigation.org/docs/typescript#organizing-types
 */

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  ParamListType,
  TabStackParamList,
  TabType,
} from './TabNavigation/tabScreens';

export type TabScreenProps<
  T extends TabType,
  U extends keyof ParamListType<T> & string, // StackParamListのkeyがstringであることを明示する
> = CompositeScreenProps<
  BottomTabScreenProps<ParamListType<T>, U>,
  BottomTabScreenProps<TabStackParamList>
>;

/* default type */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabStackParamList {}
  }
}
