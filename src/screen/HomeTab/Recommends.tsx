import React, {FC} from 'react';
import {Button, Text} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';

export const Recommends: FC = () => {
  const navigation = useStackNavigation<'HomeTab'>();

  return (
    <Layout>
      <Text>Recommends</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </Layout>
  );
};
