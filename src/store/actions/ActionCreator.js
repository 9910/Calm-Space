import {
  START_LOADING,
  STOP_LOADING,
  START_FOCUS_ACTIVITY,
  STOP_FOCUS_ACTIVITY,
  START_SLEEP_ACTIVITY,
  STOP_SLEEP_ACTIVITY,
} from './ActionTypes';

export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};

export const startFocusActivity = () => {
  return {
    type: START_FOCUS_ACTIVITY,
  };
};

export const stopFocusActivity = () => {
  return {
    type: STOP_FOCUS_ACTIVITY,
  };
};

export const startSleepActivity = () => {
  return {
    type: START_SLEEP_ACTIVITY,
  };
};

export const stopSleepActivity = () => {
  return {
    type: STOP_SLEEP_ACTIVITY,
  };
};
