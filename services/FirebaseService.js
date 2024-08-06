import firestore from '@react-native-firebase/firestore';
import { firebaseConfig } from '../config';

const usersCollection = firestore().collection('Users');
const activitiesCollection = firestore().collection('Activities');
const nutritionCollection = firestore().collection('Nutrition');

export const createUser = (uid, userData) => {
  return usersCollection.doc(uid).set(userData);
};

export const getUser = (uid) => {
  return usersCollection.doc(uid).get();
};

export const addActivity = (uid, activityData) => {
  return activitiesCollection.doc(uid).collection('UserActivities').add(activityData);
};

export const getActivities = (uid) => {
  return activitiesCollection.doc(uid).collection('UserActivities').get();
};

export const addNutrition = (uid, nutritionData) => {
  return nutritionCollection.doc(uid).collection('UserNutrition').add(nutritionData);
};

export const getNutrition = (uid) => {
  return nutritionCollection.doc(uid).collection('UserNutrition').get();
};
