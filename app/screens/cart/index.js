import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

function CartScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Cart Screen</Text>
            <Text>Hey there, How are you?</Text>
        </SafeAreaView>
    );
}

export default CartScreen;
