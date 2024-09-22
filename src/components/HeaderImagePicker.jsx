import {StyleSheet, Image, View, Alert} from 'react-native';
import React, {useEffect} from 'react';

import * as ImagePicker from 'expo-image-picker';

const HeaderImagePicker = ({callImagePicker, setCallImagePicker, headerImage, setHeaderImage}) => {
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        'Permission Denied',
        'You do not have the access to gallery/camera roll',
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setHeaderImage(result.assets[0].uri);
    }
    setCallImagePicker(false);
  };

  useEffect(() => {
    if(callImagePicker){
      pickImage();
    }
  }, [callImagePicker]);

  return (
    <View>
      {headerImage && (
        <Image source={{uri: headerImage}} style={styles.image} />
      )}
    </View>
  );
};

export default HeaderImagePicker;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    padding: 10,
    margin: 10,
  },
});
