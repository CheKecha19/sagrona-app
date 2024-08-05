import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AchievementsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Achievements</Text>
            {/* Добавьте сюда список достижений */}
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

export default AchievementsScreen;
