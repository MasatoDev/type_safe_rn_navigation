import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useTabNavigation} from 'src/navigation/TabNavigation/useTabNavigation';

export const MyPage: FC = () => {
  const tabNavigation = useTabNavigation();

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>MyPage</Text>
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

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F79A3E',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
