import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';
import {TabScreenProps} from 'src/navigation/type';

export const Recommends: FC<TabScreenProps<'HomeTab', 'Recommends'>> = ({
  navigation,
}) => {
  const handleHomeButtonPress = () => {
    navigation.navigate('Home');
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Recommends</Text>
        <Button title="Home" onPress={handleHomeButtonPress} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F13E',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
