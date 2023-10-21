/**
 * @see https://reactnavigation.org/docs/typescript#organizing-types
 */

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {
  ParamListType,
  TabStackParamList,
  TabType,
} from './TabNavigation/tabScreens';

/**
 * T - HogeTabなどTabの名前
 * U - Tで指定したHogeTabに属するスクリーン名
 */
export type TabScreenProps<
  T extends TabType,
  U extends keyof ParamListType<T> & string, // StackParamListのkeyがstringであることを明示する
> = CompositeNavigationProp<
  BottomTabNavigationProp<ParamListType<T>, U>,
  BottomTabNavigationProp<TabStackParamList>
>;

/**
 * default type
 * useNavigationや、typeを明示していない場合に下記のtypeになります
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabStackParamList {}
  }
}
