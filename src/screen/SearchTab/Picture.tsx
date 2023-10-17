import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';

export const Picture: FC = () => {
  const navigation = useStackNavigation<'SearchTab'>();

  return (
    <Layout>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#7BFACB',
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Picture</Text>
        <Button title="Search" onPress={() => navigation.navigate('Search')} />
      </View>
    </Layout>
  );
};
