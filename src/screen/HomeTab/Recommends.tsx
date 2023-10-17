import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';

export const Recommends: FC = () => {
  const navigation = useStackNavigation<'HomeTab'>();

  return (
    <Layout>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F7F13E',
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Recommends</Text>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </Layout>
  );
};
