import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { firebase } from '@react-native-firebase/auth';

const HomeScreen = () => {
    const logoutUser = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
            <Button title="Logout" onPress={logoutUser} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
