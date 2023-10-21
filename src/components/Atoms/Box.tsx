import {useNavigation} from '@react-navigation/native';
import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';

interface Props {
  children: ReactNode;
}

export const Box: FC<Props> = ({children}) => {
  const navigation = useNavigation();

  navigation.navigate('SearchTab', {screen: 'Search'});

  return <View>{children}</View>;
};
