import {useNavigation, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Layout} from 'src/components/Layout.tsx';

type Props = {
  /** 厳密にtypeをつけるならば... */
  // route: PictureScreenRouteProp;
  // navigation: PictureScreenNavigationProp;
};

export const Picture: FC<Props> = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const id = (route.params as {pictureId: string}).pictureId; // 予測できないparams
  const test = id;
  console.log('test', test);

  const handleRecommendsButtonPress = () => {
    navigation.navigate('aaa'); // 予測できない遷移先
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
