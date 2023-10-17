import {NavigatorScreenParams} from '@react-navigation/native';

import {
  HomeStackNavigation,
  MyPageStackNavigation,
  SearchStackNavigation,
} from '../StackNavigation';
import {HomeTabStackParamList} from '../StackNavigation/screens/homeTabScreens';
import {MyPageTabStackParamList} from '../StackNavigation/screens/myPageTabScreens';
import {SearchTabStackParamList} from '../StackNavigation/screens/searchTabScreens';
import {TabNavigationScreens} from '../type';

/** ParamList */
export type TabStackParamList = {
  HomeTab: NavigatorScreenParams<HomeTabStackParamList>;
  SearchTab: NavigatorScreenParams<SearchTabStackParamList>;
  MyPageTab: NavigatorScreenParams<MyPageTabStackParamList>;
};

/** Mapping */
export type StackParamMapping = {
  HomeTab: HomeTabStackParamList;
  SearchTab: SearchTabStackParamList;
  MyPageTab: MyPageTabStackParamList;
};

/* Tab Nav Type */
export type TabType = keyof TabStackParamList;

/* Stack Nav Type */
export type ParamListType<T extends TabType> = StackParamMapping[T];

/** Screens */
export const tabScreens: TabNavigationScreens<keyof TabStackParamList> = {
  HomeTab: {
    name: 'HomeTab',
    component: HomeStackNavigation,
  },
  SearchTab: {
    name: 'SearchTab',
    component: SearchStackNavigation,
  },
  MyPageTab: {
    name: 'MyPageTab',
    component: MyPageStackNavigation,
  },
};
