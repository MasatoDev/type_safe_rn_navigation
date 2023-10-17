import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

import {TabType} from './TabNavigation/tabScreens';

export const commonScreenOptions: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTintColor: '#0D0D0D',
  headerTitleAlign: 'center',
};

export const Tabs: {[key in TabType]: TabType} = {
  HomeTab: 'HomeTab',
  SearchTab: 'SearchTab',
  MyPageTab: 'MyPageTab',
} as const;
