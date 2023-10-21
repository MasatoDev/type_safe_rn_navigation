import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';

export const Home = () => {
  const navigation = useNavigation();

  const handlePictureButtonPress = () => {
    navigation.navigate('Picture', {hogeId: 1});
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
