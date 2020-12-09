import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { StatusBar, Platform } from 'react-native';

import HomeScreen from './screens/home';
import CategoriesScreen from './screens/categories';
import SearchScreen from './screens/search';

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function App() {
    const navigationRef = React.useRef();

    React.useEffect(() => {
        if (Platform.OS === 'android') {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#ffffff');
        }
    }, []);

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
                            height: 64,
                        },
                    }}>
                    <Tab.Screen
                        name="home"
                        component={HomeScreen}
                        options={{
                            title: 'Home',
                            tabBarIcon: () => <Icon name="home" size={24} />,
                        }}
                    />
                    <Tab.Screen
                        name="categories"
                        component={CategoriesScreen}
                        options={{
                            title: 'Home',
                            tabBarIcon: () => (
                                <Icon name="barcode-scan" size={24} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="search"
                        component={SearchScreen}
                        options={{
                            title: 'Home',
                            tabBarIcon: () => <Icon name="account" size={24} />,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
export default App;
