import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity } from 'react-native';
import ChatScreen from './src/components/chat';
import ChatsTabScreen from './src/pages/ChatsTabScreen';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="chatsTab"
          component={ChatsTabScreen}
          options={{
            headerTitle: 'Conversas',
            headerTitleStyle: ({ color: "#00b2ff" }),

            headerLeft: () => (
              <TouchableOpacity>
                <Feather
                  name='chevron-left'
                  size={25}
                  color={'#00b2ff'}
                  style={{ alignItems: 'flex-start', marginRight: 20 }}
                />
              </TouchableOpacity>),

            headerRight: () => (
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 20 }}>
                <TouchableOpacity>
                  <Feather
                    name='users'
                    size={22}
                    color='#00b2ff'
                    // onPress={() => { navigation.navigate('Nome da Pagina'); }}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Feather
                    name='camera'
                    size={22}
                    color='#00b2ff'
                    // onPress={() => { navigation.navigate('Nome da Pagina'); }}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Feather
                    name='more-vertical'
                    size={22}
                    color='#00b2ff'
                    // onPress={() => { navigation.navigate('Nome da Pagina'); }}
                  />
                </TouchableOpacity>
              </View>
            ),
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="chat"
          component={ChatScreen}
          options={{
            headerTitle: 'Chat',
            headerTitleStyle: ({ color: "#00b2ff" }),
          }}
          // onPress={() => { navigation.navigate('<NOME DA PAGINA>'); }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}