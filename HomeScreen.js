import React from 'react';
import { View, Text, Button } from 'react-native';
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
    <View>
      <Text>Welcome!</Text>
      <Button title="Logout" onPress={logoutUser} />
    </View>
  );
};

export default HomeScreen;
