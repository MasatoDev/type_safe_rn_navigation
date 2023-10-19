import {StackNavigationScreens} from '../type';
import {MyPage} from 'src/screen/MyPageTab/MyPage';

export type MyPageTabStackParamList = {
  MyPage: undefined;
};

export const myPageTabScreens: StackNavigationScreens<
  keyof MyPageTabStackParamList
> = {
  MyPage: {
    name: 'MyPage',
    component: MyPage,
    options: {headerShown: false},
  },
};
