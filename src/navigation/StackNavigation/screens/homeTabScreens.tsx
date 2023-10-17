import {StackNavigationScreens} from 'src/navigation/type';
import {Home} from 'src/screen/HomeTab/Home';
import {Picture} from 'src/screen/HomeTab/Picture';
import {Recommends} from 'src/screen/HomeTab/Recommends';

export type HomeTabStackParamList = {
  Home: undefined;
  Picture: undefined;
  Recommends: undefined;
};

export const homeTabScreens: StackNavigationScreens<
  keyof HomeTabStackParamList
> = {
  Home: {
    name: 'Home',
    component: Home,
    options: {headerShown: false},
  },
  Picture: {
    name: 'Picture',
    component: Picture,
    options: {headerShown: false},
  },
  Recommends: {
    name: 'Recommends',
    component: Recommends,
    options: {headerShown: false},
  },
};
