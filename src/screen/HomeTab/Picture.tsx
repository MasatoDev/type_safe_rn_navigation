import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';
import {useStackRoute} from 'src/navigation/StackNavigation/useStackRoute';

export const Picture: FC = () => {
  const navigation = useStackNavigation<'HomeTab'>();
  const route = useStackRoute<'HomeTab', 'Picture'>();

  console.log(route.params.pictureId);

  const handleRecommendsButtonPress = () => {
    navigation.navigate('Recommends');
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Picture</Text>

        <Button title="Recommends" onPress={handleRecommendsButtonPress} />
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
