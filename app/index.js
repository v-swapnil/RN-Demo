import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

import HomeScreen from './screens/home';
import CategoriesScreen from './screens/categories';
import SearchScreen from './screens/search';
import CartScreen from './screens/cart';

const Tab = createBottomTabNavigator();

function App() {
    const navigationRef = React.useRef();

    useReduxDevToolsExtension(navigationRef);

    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: 'blue',
                        inactiveTintColor: 'green',
                        showLabel: false,
                        style: {
                            backgroundColor: 'red',
                            borderRadius: 50,
                        },
                    }}>
                    <Tab.Screen
                        name="home"
                        component={HomeScreen}
                        options={{
                            title: 'Home',
                        }}
                    />
                    <Tab.Screen
                        name="categories"
                        component={CategoriesScreen}
                    />
                    <Tab.Screen name="search" component={SearchScreen} />
                    <Tab.Screen name="cart" component={CartScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
export default App;
