import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import { getUser, createUser } from '../services/FirebaseService';

const ProfileScreen = () => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');

    useEffect(() => {
        const currentUser = firebase.auth().currentUser;
        setUser(currentUser);
        if (currentUser) {
            getUser(currentUser.uid).then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    setName(documentSnapshot.data().name);
                }
            });
        }
    }, []);

    const updateProfile = async () => {
        try {
            await createUser(user.uid, { name });
            alert('Profile updated successfully');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Profile### Обновление файлов проекта для использования `config.js`

                #### Создание файла `config.js`
                Создайте файл `config.js` в корне проекта:

                ```javascript
                // config.js

                export const firebaseConfig = {
                    apiKey: "YOUR_API_KEY",
                authDomain: "YOUR_AUTH_DOMAIN",
                projectId: "YOUR_PROJECT_ID",
                storageBucket: "YOUR_STORAGE_BUCKET",
                messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
                appId: "YOUR_APP_ID",
                measurementId: "YOUR_MEASUREMENT_ID"
};

                export const googleWebClientId = 'YOUR_WEB_CLIENT_ID';

// Add other global variables here
