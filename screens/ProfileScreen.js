import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { firebase } from '@react-native-firebase/auth';

const ProfileScreen = () => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');

    useEffect(() => {
        const currentUser = firebase.auth().currentUser;
        setUser(currentUser);
        if (currentUser) {
            setName(currentUser.displayName || '');
        }
    }, []);

    const updateProfile = async () => {
        try {
            await user.updateProfile({ displayName: name });
            alert('Profile updated successfully');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <Button title="Update Profile" onPress={updateProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default ProfileScreen;
