import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import IndexScreen from './src/screens/IndexScreen'
import DetailScreen from './src/screens/DetailScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

import { Feather, EvilIcons } from "@expo/vector-icons";
import { Provider } from './src/context/BlogContext';;

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
          <Stack.Screen
            name='Index'
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name='plus' size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name='Detail'
            component={DetailScreen}
            options={({ route, navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() =>
                  navigation.navigate("Edit", { id: route.params.id })
                }>
                  <EvilIcons name='pencil' size={35} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name='Create' component={CreateScreen} />
          <Stack.Screen name='Edit' component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};