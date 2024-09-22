import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {useNoteStore} from '../storage/noteStore';

import NoteItem from '../components/NoteItem';
import Button from '../components/Button';
import DeleteWarnModal from '../components/DeleteWarnModal';

const HomeScreen = ({navigation}) => {
  const [alert, setAlert] = useState({
    isAlert: false,
    id: '',
  });

  const notes = useNoteStore(state => state.notes);
  const loadNotes = useNoteStore(state => state.loadNotes);
  const deleteNote = useNoteStore(state => state.deleteNote);

  useEffect(() => {
    loadNotes();
  }, []);

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
