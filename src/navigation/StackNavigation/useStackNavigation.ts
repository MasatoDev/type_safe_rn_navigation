import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListType, TabType} from '../TabNavigation/tabScreens';
import {useNavigation} from '@react-navigation/native';

// import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
// import {TabNavigationProp} from '../TabNavigation/useTabNavigation';

/**
 * NOTE: 各タブ内のスクリーンで別タブへのnavigateも許容する場合は TabNavigationProp を含める
 */
// export type StackNavigationProp<T extends TabType> = CompositeNavigationProp<
//   TabNavigationProp,
//   NativeStackNavigationProp<ParamListType<T>>
// >;

export type StackNavigationProp<T extends TabType> = NativeStackNavigationProp<
  ParamListType<T>
>;

export function useStackNavigation<T extends TabType>() {
  return useNavigation<StackNavigationProp<T>>();
}
