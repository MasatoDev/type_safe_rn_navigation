import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {TabScreenProps} from 'src/navigation/type';

export const MyPage: FC<TabScreenProps<'MyPageTab', 'MyPage'>> = ({
  navigation,
}) => {
  const handlePictureOfHomeTabButtonPress = () => {
    navigation.navigate('HomeTab', {
      screen: 'Picture',
      params: {pictureId: 1},
    });
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>MyPage</Text>
        <Button
          title="HomeTabのPicture"
          onPress={handlePictureOfHomeTabButtonPress}
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
