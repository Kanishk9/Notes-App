import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';

import Button from './Button';

const DeleteWarnModal = ({alert, setAlert, deleteBtnHandler}) => {
  //Close alert on click
  const deleteHandler = () => {
    setAlert({isAlert: false, id: ''});
    deleteBtnHandler(alert.id);
  };
  const cancelHandler = () => {
    setAlert({isAlert: false, id: ''});
  };

  return (
    <Modal animationType="slide" transparent={true} visible={alert.isAlert}>
      <View style={styles.container}>
        <View style={styles.alertContainer}>
          <Text style={styles.alertHeading}>Delete Note</Text>
          <Text style={styles.alertDescription}>
            Do you want to permanently delete this note?
          </Text>
          <View style={styles.btnContainer}>
            <Button title="DELETE" btnPressHandler={deleteHandler} />
            <Button title="CANCEL" btnPressHandler={cancelHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteWarnModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  alertContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 250,
    borderRadius: 20,
    borderColor: 'grey',
    backgroundColor: '#FFFFFF',
  },
  alertHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
  alertDescription: {
    fontSize: 16,
    paddingHorizontal: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
