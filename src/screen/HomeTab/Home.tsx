import React, {FC} from 'react';
import {Button, Text} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';

export const Home: FC = () => {
  const navigation = useStackNavigation<'HomeTab'>();

  return (
    <Layout>
      <Text>Home</Text>
      <Button title="Picture" onPress={() => navigation.navigate('Picture')} />
    </Layout>
  );
};
