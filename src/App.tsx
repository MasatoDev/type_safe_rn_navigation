import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TabNavigation} from 'src/navigation/TabNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
export default App;
