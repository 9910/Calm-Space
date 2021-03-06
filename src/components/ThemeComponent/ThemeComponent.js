/* eslint-disable no-shadow */
/* eslint-disable indent */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Text, Header } from 'react-native-elements';

import { startSoundsModal } from '../../store/actions/ActionCreator';
import * as Constants from '../../../constants';
import SoundsComponent from '../SoundsComponent/SoundsComponent';
import Styles from './ThemeComponentStyle';

const styles = StyleSheet.create(Styles);

const mapStateToProps = state => {
  return {
    isSoundsModalActive: state.loadingReducer.soundsModal,
  };
};

const ThemeComponent = ({ navigation, theme, startSoundsModal, isSoundsModalActive }) => {
  let backgroundImage = '';
  let themeTitle = '';
  let themeDescription = '';
  let selected = false;
  let proVersion = false;
  let buyButton = (
    <TouchableOpacity style={styles.buyThemeBtn} activeOpacity={0.5}>
      <Text h1 style={styles.btnText}>
        {Constants.THEME_FREE}
      </Text>
    </TouchableOpacity>
  );

  switch (theme) {
    case Constants.ThemesEnum.FOREST:
      backgroundImage = require('../../../assets/forest-theme-background.jpg');
      themeTitle = Constants.FOREST_THEME;
      themeDescription = Constants.FOREST_DESCRIPTION;
      selected = true;
      break;
    case Constants.ThemesEnum.DESERT:
      backgroundImage = require('../../../assets/desert-theme-background.jpg');
      themeTitle = Constants.DESERT_THEME;
      themeDescription = Constants.DESERT_DESCRIPTION;
      break;
    case Constants.ThemesEnum.SPACE:
      backgroundImage = require('../../../assets/space-theme-background.jpg');
      themeTitle = Constants.SPACE_THEME;
      themeDescription = Constants.SPACE_DESCRIPTION;
      proVersion = true;
      break;
    default:
      backgroundImage = require('../../../assets/forest-theme-background.jpg');
      themeTitle = Constants.FOREST_THEME;
      themeDescription = Constants.FOREST_DESCRIPTION;
      break;
  }

  if (selected) {
    buyButton = (
      <TouchableOpacity disabled style={styles.buyThemeBtn} activeOpacity={0.5}>
        <Text h1 style={styles.btnTextDisabled}>
          {Constants.THEME_SELECTED}
        </Text>
      </TouchableOpacity>
    );
  } else if (proVersion) {
    buyButton = (
      <TouchableOpacity style={styles.buyThemeBtnPro} activeOpacity={0.5}>
        <Text h1 style={styles.btnTextPro}>
          {Constants.THEME_PRO}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      data-test="component-theme"
    >
      <View style={styles.container} data-test="view-container">
        <Header
          leftComponent={
            <TouchableOpacity onPress={() => navigation.navigate(Constants.SCREEN.HOME)}>
              <Icon name="chevron-left" type={Constants.ICON_TYPE.EVILICON} size={60} />
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity onPress={() => startSoundsModal()}>
              <Icon name="music" type={Constants.ICON_TYPE.FONT_AWESOME} size={30} />
            </TouchableOpacity>
          }
          containerStyle={styles.headerContainer}
          data-test="header"
        />
        <View style={styles.bottomContent} data-test="view-bottom-content">
          <View style={styles.themeDescription} data-test="view-theme-info">
            <Text style={styles.themeName} data-test="text-title">
              {themeTitle}
            </Text>
            <Text style={styles.themeText} data-test="text-description">
              {themeDescription}
            </Text>
          </View>
          {buyButton}
        </View>
      </View>
      {/* <View style={styles.swipeIcon} data-test="view-swipe-icon">
        <Icon
          name="arrows-h"
          type={Constants.ICON_TYPE.FONT_AWESOME}
          color="white"
          size={30}
          data-test="icon-arrows"
        />
        <Icon
          name="hand"
          type={Constants.ICON_TYPE.ENTYPO}
          color="white"
          size={40}
          data-test="icon-hand"
        />
      </View> */}
      <Modal
        animationType="fade"
        // eslint-disable-next-line react/jsx-boolean-value
        visible={isSoundsModalActive}
        presentationStyle="overFullScreen"
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
        }}
      >
        <SoundsComponent />
      </Modal>
    </ImageBackground>
  );
};

ThemeComponent.propTypes = {
  navigation: PropTypes.object,
  theme: PropTypes.oneOf([
    Constants.ThemesEnum.FOREST,
    Constants.ThemesEnum.DESERT,
    Constants.ThemesEnum.SPACE,
  ]),
  startSoundsModal: PropTypes.func,
  isSoundsModalActive: PropTypes.bool,
};

export default connect(mapStateToProps, { startSoundsModal })(ThemeComponent);
