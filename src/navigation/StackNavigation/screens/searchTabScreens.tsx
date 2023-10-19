import {StackNavigationScreens} from '../type';
import {Search} from 'src/screen/SearchTab/Search';
import {Picture} from 'src/screen/SearchTab/Picture';

export type SearchTabStackParamList = {
  Search: undefined;
  Picture: {pictureId: number};
};

export const searchTabScreens: StackNavigationScreens<
  keyof SearchTabStackParamList
> = {
  Search: {
    name: 'Search',
    component: Search,
    options: {headerShown: false},
  },
  Picture: {
    name: 'Picture',
    component: Picture,
    options: {headerShown: false},
  },
};
