import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import NoteItem from '../components/NoteItem';
import Button from '../components/Button';
import DeleteWarnModal from '../components/DeleteWarnModal';

const HomeScreen = ({navigation}) => {
  const [alert, setAlert] = useState({
    isAlert: false,
    id: '',
  });

  const [notes, setNotes] = useState([
    {id: 1, title: 'title1', content: 'content1', creationDate: '21/09/2024',backgroundColor: '#7cf7a1'},
    {id: 2, title: 'title2', content: 'content2', creationDate: '21/09/2024',backgroundColor: '#ff1e48'},
    {id: 3, title: 'title3', content: 'content3', creationDate: '21/09/2024',backgroundColor: '#ffffff'},
  ]);

  const deleteNote = id => {
    const updatedNotes = notes.filter(note => {
      if (note.id !== id) {
        return true;
      }
    });
    setNotes(updatedNotes);
  };

  const addBtnHandler = () => {
    navigation.navigate('NoteEditorScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>Your Notes</Text>
        <Button title="Create New Note +" btnPressHandler={addBtnHandler} />
      </View>
      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <NoteItem
            note={item}
            deleteBtnHandler={deleteNote}
            setAlert={setAlert}
            handleOnPress={() => navigation.navigate('NoteEditorScreen', item)}
          />
        )}
      />
      <DeleteWarnModal
        alert={alert}
        setAlert={setAlert}
        deleteBtnHandler={deleteNote}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020a1c',
  },
  headerContainer: {
    padding: 5,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
