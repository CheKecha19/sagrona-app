import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import GoogleFit, { Scopes } from 'react-native-google-fit';

const ActivityScreen = () => {
    const [steps, setSteps] = useState(0);

    useEffect(() => {
        const options = {
            scopes: [Scopes.FITNESS_ACTIVITY_READ, Scopes.FITNESS_ACTIVITY_WRITE],
        };

        GoogleFit.authorize(options)
            .then(authResult => {
                if (authResult.success) {
                    GoogleFit.getDailySteps().then(stepsData => {
                        setSteps(stepsData[0].steps);
                    });
                }
            })
            .catch(() => {
                alert('Google Fit authorization failed');
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text>Activity</Text>
            <Text>Steps: {steps}</Text>
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

export default ActivityScreen;
