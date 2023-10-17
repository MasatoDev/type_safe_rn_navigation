import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';

export const Search: FC = () => {
  const navigation = useStackNavigation<'SearchTab'>();

  return (
    <Layout>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FA6C28',
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Search</Text>
        <Button
          title="Picture"
          onPress={() => navigation.navigate('Picture', {pictureId: 1})}
        />
      </View>
    </Layout>
  );
};
