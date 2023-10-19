import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';

export const Home: FC = () => {
  const navigation = useStackNavigation<'HomeTab'>();

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Button
          title="Picture"
          onPress={() => navigation.navigate('Picture', {pictureId: 1})}
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
    backgroundColor: '#3ECFF7',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
