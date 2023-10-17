import React, {FC} from 'react';
import {Button, Text} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';

export const Picture: FC = () => {
  const navigation = useStackNavigation<'SearchTab'>();

  return (
    <Layout>
      <Text>Picture</Text>
      <Button title="Search" onPress={() => navigation.navigate('Search')} />
    </Layout>
  );
};
