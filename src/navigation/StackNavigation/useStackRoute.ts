import {RouteProp, useRoute} from '@react-navigation/native';

import {
  ParamListType,
  StackParamMapping,
  TabType,
} from '../TabNavigation/tabScreens';

export function useStackRoute<
  T extends TabType,
  U extends keyof StackParamMapping[T],
>() {
  return useRoute<RouteProp<ParamListType<T>, U>>();
}
