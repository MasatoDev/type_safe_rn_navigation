import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';
import {useStackRoute} from 'src/navigation/StackNavigation/useStackRoute';

export const Picture: FC = () => {
  const navigation = useStackNavigation<'HomeTab'>();
  const route = useStackRoute<'HomeTab', 'Picture'>();

  console.log(route.params.pictureId);

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

        <Button
          title="Recommends"
          onPress={() => navigation.navigate('Recommends')}
        />
      </View>
    </Layout>
  );
};
