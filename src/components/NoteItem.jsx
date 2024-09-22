import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NoteItem = ({note, handleOnPress, setAlert}) => {
  //Destructuring note object
  const {id, title, content, creationDate, backgroundColor} = note;

  const deleteBtnHandler = () => {
    setAlert({isAlert: true, id: id});
  };

  return (
    <TouchableOpacity style={[styles.container, {backgroundColor}]} onPress={handleOnPress}>
      <View>
        <View style={styles.titleContainer}>
          {/* <Image /> */}
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <Text style={styles.contentText} numberOfLines={2}>
          {content}
        </Text>
        <Text style={styles.dateText}>{creationDate}</Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => deleteBtnHandler()}>
        <MaterialIcons name="delete-forever" size={30} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '500',
  },
  contentText: {
    fontSize: 18,
  },
  dateText: {
    fontStyle: 'italic',
  },
  iconContainer: {
    padding: 10,
  },
});
