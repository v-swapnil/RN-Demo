import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/Feather';

import styles from './styles';

const paymentOptions = [
    {
        icon: null,
        title: 'Top up',
    },
];

function NewText(props) {
    const style = {
        color: '#333333',
    };

    if (props.textMuted) {
        style.color = '#707070';
    }

    if (props.strong) {
        style.fontWeight = '700';
    }

    if (props.size) {
        style.fontSize = props.size;
    }

    return <Text style={[style, props.style]}>{props.children}</Text>;
}

function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{
                    backgroundColor: '#ffffff',
                    padding: 20,
                }}>
                <View
                    style={{
                        marginVertical: 20,
                    }}>
                    <NewText strong size={32}>
                        Hello!
                    </NewText>
                    <NewText textMuted size={16}>
                        Swapnil Suryajoshi
                    </NewText>
                </View>
                <View
                    style={{
                        marginVertical: 20,
                        backgroundColor: 'blue'
                    }}>
                    <NewText strong size={32}>
                        Hello!
                    </NewText>
                    <NewText textMuted size={16}>
                        Swapnil Suryajoshi
                    </NewText>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
