import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

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
  const sortNotesByName = useNoteStore(state => state.sortNotesByName);
  const sortNotesByCreationDate = useNoteStore(
    state => state.sortNotesByCreationDate,
  );

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
      <View style={styles.sortContainer}>
        <Text style={styles.sortText}>SORT BY:- </Text>
        <TouchableOpacity onPress={sortNotesByName}>
          <Text style={styles.sortText}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={sortNotesByCreationDate}>
          <Text style={styles.sortText}>Date</Text>
        </TouchableOpacity>
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
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 5,
  },
  sortText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '400',
  },
});
