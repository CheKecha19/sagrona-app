import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const NutritionScreen = () => {
    const [meal, setMeal] = useState('');
    const [meals, setMeals] = useState([]);

    const addMeal = () => {
        setMeals([...meals, { id: Date.now().toString(), meal }]);
        setMeal('');
    };

    return (
        <View style={styles.container}>
            <Text>Nutrition</Text>
            <TextInput
                placeholder="Meal"
                value={meal}
                onChangeText={setMeal}
                style={styles.input}
            />
            <Button title="Add Meal" onPress={addMeal} />
            <FlatList
                data={meals}
                renderItem={({ item }) => <Text>{item.meal}</Text>}
                keyExtractor={item => item.id}
            />
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

export default NutritionScreen;
