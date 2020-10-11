import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

function SearchScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Search Screen</Text>
            <Text>Hey there, How are you?</Text>
        </SafeAreaView>
    );
}

export default SearchScreen;
