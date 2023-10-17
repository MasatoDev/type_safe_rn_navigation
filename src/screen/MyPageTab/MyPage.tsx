import React, {FC} from 'react';
import {Button, Text} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';

export const MyPage: FC = () => {
  const navigation = useStackNavigation<'MyPageTab'>();

  return (
    <Layout>
      <Text>MyPage</Text>
      <Button
        title="Picture"
        onPress={() => navigation.navigate('HomeTab', {screen: 'Picture'})}
      />
    </Layout>
  );
};
