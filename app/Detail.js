import * as React from 'react';
import { Text, View ,Image} from 'react-native';

import { BaseButton, FlatList } from 'react-native-gesture-handler';
import _ from 'lodash'


function DetailScreen() {
const style = {width:120,height:120,margin: 10};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

export default DetailScreen;