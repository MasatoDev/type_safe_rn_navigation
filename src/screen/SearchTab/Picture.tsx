import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';

export const Picture: FC = () => {
  const navigation = useNavigation();

  const handleSearchButtonPress = () => {
    navigation.navigate('Search');
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Picture</Text>
        <Button title="Search" onPress={handleSearchButtonPress} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7BFACB',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
