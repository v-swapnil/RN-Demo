import React from 'react';
import { Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home Screen</Text>
            <Text>Hey there, How are you?</Text>
            <TextInput placeholder="Enter your name " />
            <Icon name="rocket" size={30} color="#900" />
        </SafeAreaView>
    );
}

export default HomeScreen;
