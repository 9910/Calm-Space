/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  // ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Text, Button, SocialIcon, Input, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import * as Constants from '../../../constants';
import Styles from './SignUpScreenStyle';

const styles = StyleSheet.create(Styles);

const SignUpScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform === Constants.PLATFORM.IOS ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.socialButtons}>
        <TouchableOpacity
          activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
          onPress={() => console.log('[SignIn Screen] Facebook Login Button onPress')}
        >
          <SocialIcon type="facebook" button title={Constants.FACEBOOK_REGISTER} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
          onPress={() => console.log('[SignIn Screen] Google Login Button onPress')}
        >
          <SocialIcon type="google" button title={Constants.GOOGLE_REGISTER} />
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <Input
          label={Constants.USERNAME_LABEL}
          placeholder={Constants.USERNAME_PLACEHOLDER}
          leftIcon={<Icon type={Constants.ICON_TYPE.FONT_AWESOME} name="user" color="#a9a9a9" />}
          containerStyle={{ marginBottom: 20 }}
          leftIconContainerStyle={{ paddingRight: 10 }}
        />
        <Input
          label={Constants.EMAIL_LABEL}
          placeholder={Constants.EMAIL_PLACEHOLDER}
          leftIcon={<Icon type="zocial" name="email" color="#a9a9a9" />}
          containerStyle={{ marginBottom: 20 }}
          leftIconContainerStyle={{ paddingRight: 10 }}
        />
        <Input
          label={Constants.PASSWORD_LABEL}
          placeholder={Constants.PASSWORD_PLACEHOLDER}
          leftIcon={<Icon type={Constants.ICON_TYPE.IONICON} name="ios-lock" color="#a9a9a9" />}
          containerStyle={{ marginBottom: 20 }}
          leftIconContainerStyle={{ paddingRight: 10 }}
        />
        <Input
          label={Constants.REPEAT_PASSWORD_LABEL}
          placeholder={Constants.PASSWORD_PLACEHOLDER}
          leftIcon={<Icon type={Constants.ICON_TYPE.IONICON} name="ios-lock" color="#a9a9a9" />}
          containerStyle={{ marginBottom: 20 }}
          leftIconContainerStyle={{ paddingRight: 10 }}
        />
        <Button
          title="Register"
          linearGradientProps={{
            colors: [Constants.THEME.colors.lightGreen2, Constants.THEME.colors.lightGreen],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          onPress={() => navigation.navigate(Constants.SCREEN.HOME)}
          buttonStyle={{ height: 60, marginVertical: 10 }}
          titleStyle={{ fontSize: Constants.AUTH_BUTTON_TEXT_SIZE }}
        />
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => console.log('[SignIn Screen] Forgot Password onPress')}
        >
          <Text style={styles.forgotPassword}>{Constants.FORGOT_PASSWORD}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignUpScreen;
