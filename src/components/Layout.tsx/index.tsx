import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({children}) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
