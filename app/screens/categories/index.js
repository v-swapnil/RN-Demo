import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import RNPgReactNativeSDK from 'react-native-pg-react-native-sdk';

import styles from './styles';

function CategoriesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hi there</Text>
        </SafeAreaView>
    );
}

export default CategoriesScreen;
