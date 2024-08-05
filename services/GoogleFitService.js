import GoogleFit, { Scopes } from 'react-native-google-fit';

const options = {
    scopes: [
        Scopes.FITNESS_ACTIVITY_READ,
        Scopes.FITNESS_ACTIVITY_WRITE,
        Scopes.FITNESS_SLEEP_READ,
        Scopes.FITNESS_SLEEP_WRITE,
    ],
};

export const authorizeGoogleFit = () => {
    return GoogleFit.authorize(options);
};

export const getDailySteps = () => {
    return GoogleFit.getDailySteps();
};

export const getSleepData = () => {
    return GoogleFit.getSleepData();
};
