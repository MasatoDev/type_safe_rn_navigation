import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {TabScreenProps} from 'src/navigation/type';

export const Home: FC<TabScreenProps<'HomeTab', 'Home'>> = ({navigation}) => {
  const handlePictureButtonPress = () => {
    navigation.navigate('Picture', {pictureId: 1});
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Button title="Picture" onPress={handlePictureButtonPress} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3ECFF7',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
