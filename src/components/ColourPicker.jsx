import {Modal, StyleSheet, View} from 'react-native';
import React from 'react';

import Button from '../components/Button';

import ColorPicker from 'react-native-wheel-color-picker';

const ColourPicker = ({
  isColorPickerVisible,
  setIsColorPickerVisible,
  backgroundColor,
  setBackgroundColor,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isColorPickerVisible}>
      <View style={styles.container}>
        <View style={styles.container}>
          <ColorPicker
            initialColor={backgroundColor}
            onColorChange={color => setBackgroundColor(color)}
            onColorChangeComplete={color => setBackgroundColor(color)}
          />
          <View style={styles.btnContainer}>
            <Button
              title="Done"
              btnPressHandler={() => setIsColorPickerVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ColourPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  alertContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 400,
    borderRadius: 20,
  },
  btnContainer: {
    padding: 10,
  },
});
