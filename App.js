import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity } from 'react-native';
import ChatScreen from './src/pages/ChatScreen';
import ChatsTabScreen from './src/pages/ChatsTabScreen';
import { Feather } from '@expo/vector-icons';
import NavigationScreen from './src/routes/NavigationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NavigationScreen"
          component={NavigationScreen}
          options={{
            title: "Menu de Navegação",
            // headerShown: false
          }}
        />

        <Stack.Screen
          name="ChatsTabScreen"
          component={ChatsTabScreen}
        />

        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
                />
      </Stack.Navigator>
    </NavigationContainer>
  );
}