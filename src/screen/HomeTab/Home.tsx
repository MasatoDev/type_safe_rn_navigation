import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';

export const Home: FC = () => {
  const navigation = useStackNavigation<'HomeTab'>();

  return (
    <Layout>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#3ECFF7',
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Home</Text>
        <Button
          title="Picture"
          onPress={() => navigation.navigate('Picture', {pictureId: 1})}
        />
      </View>
    </Layout>
  );
};
