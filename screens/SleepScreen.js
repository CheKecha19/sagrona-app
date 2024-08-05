import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import GoogleFit, { Scopes } from 'react-native-google-fit';

const SleepScreen = () => {
    const [sleepData, setSleepData] = useState(null);

    useEffect(() => {
        const options = {
            scopes: [Scopes.FITNESS_SLEEP_READ, Scopes.FITNESS_SLEEP_WRITE],
        };

        GoogleFit.authorize(options)
            .then(authResult => {
                if (authResult.success) {
                    GoogleFit.getSleepData().then(sleepData => {
                        setSleepData(sleepData);
                    });
                }
            })
            .catch(() => {
                alert('Google Fit authorization failed');
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text>Sleep</Text>
            {sleepData ? (
                <Text>Sleep: {sleepData}</Text>
            ) : (
                <Text>No sleep data available</Text>
            )}
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

export default SleepScreen;
