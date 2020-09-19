import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/style';

function MainScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Hello Jesse u have a nice cock!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MainScreen;