import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationScreen from './src/pages/NavigationScreen';
import ChatsTabScreen from './src/pages/ChatsTabScreen';
import ChatScreen from './src/pages/ChatScreen';
import CamScreen from './src/pages/CamScreen';

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

        <Stack.Screen
          name="CamScreen"
          component={CamScreen}
                />
      </Stack.Navigator>
    </NavigationContainer>
  );
}