import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ing from './Ing';
import Complete from './Complete';

const Stack = createNativeStackNavigator();

function Delivery() {
  return (
    // Complete(완료) 화면을 Ing(지도) 화면 위에 Stack 형태로 쌓음 (지도는 로딩 시간이 길기 때문에 메모리 최적화를 위함)
    <Stack.Navigator initialRouteName="Ing">
      <Stack.Screen name="ing" component={Ing} options={{headerShown: false}} />
      <Stack.Screen
        name="Complete"
        component={Complete}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Delivery;
