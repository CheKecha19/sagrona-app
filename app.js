import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ActivityScreen from './screens/ActivityScreen';
import NutritionScreen from './screens/NutritionScreen';
import SleepScreen from './screens/SleepScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import SocialScreen from './screens/SocialScreen';
import { GoogleSignin } from '@react-native-community/google-signin';
import { firebaseConfig, googleWebClientId } from './config';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const App = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: googleWebClientId,
        });

        const subscriber = firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
            if (initializing) setInitializing(false);
        });

        return subscriber; // Отписка при размонтировании
    }, []);

    if (initializing) return null;

    return (
        <NavigationContainer>
            {user ? (
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                    <Tab.Screen name="Activity" component={ActivityScreen} />
                    <Tab.Screen name="Nutrition" component={NutritionScreen} />
                    <Tab.Screen name="Sleep" component={SleepScreen} />
                    <Tab.Screen name="Achievements" component={AchievementsScreen} />
                    <Tab.Screen name="Social" component={SocialScreen} />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={SignupScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default App;
