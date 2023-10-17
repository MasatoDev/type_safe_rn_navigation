import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useTabNavigation} from 'src/navigation/TabNavigation/useTabNavigation';

export const MyPage: FC = () => {
  const tabNavigation = useTabNavigation();

  return (
    <Layout>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F79A3E',
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>MyPage</Text>
        <Button
          title="HomeTabのPicture"
          onPress={() =>
            tabNavigation.navigate('HomeTab', {
              screen: 'Picture',
              params: {pictureId: 1},
            })
          }
        />
      </View>
    </Layout>
  );
};
