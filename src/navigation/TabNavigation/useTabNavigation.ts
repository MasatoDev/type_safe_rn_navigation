import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {TabStackParamList} from './tabScreens';

export type TabNavigationProp = BottomTabNavigationProp<TabStackParamList>;

export const useTabNavigation = () => useNavigation<TabNavigationProp>();
