import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Clipboard,
} from 'react-native';
import React, {useState} from 'react';

import {useNoteStore} from '../storage/noteStore';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Button from '../components/Button';
import {getCurrentDateEU} from '../utils/utils';
import ColourPicker from '../components/ColourPicker';

const NoteEditorScreen = ({route, navigation}) => {
  const note = route.params;
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');
  const [backgroundColor, setBackgroundColor] = useState(
    note?.backgroundColor || '#7cf7a1',
  );
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  //   const addNote = useNoteStore(state => state.addNote);
  //   const editNote = useNoteStore(state => state.editNote);

  const saveBtnHandler = () => {
    const newNote = {
      id: note?.id || Date.now().toString(),
      title,
      content,
      creationDate: getCurrentDateEU(),
      backgroundColor,
    };

    console.log(newNote);

    // if (note) {
    //   // Edit existing note
    //   editNote(newNote);
    // } else {
    //   // Add new note
    //   addNote(newNote);
    // }

    navigation.goBack();
  };

  //Function to copy content to clipboard
  const clipboardBtnHandler = () => {
    Clipboard.setString(content);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>
          {note ? 'Edit Note' : 'Add Note'}
        </Text>
        <Button title="SAVE" btnPressHandler={saveBtnHandler} />
      </View>
      <View style={{flex: 1, padding: 10, backgroundColor}}>
        <TextInput
          style={styles.titleContainer}
          placeholder="Note Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.contentContainer}
          placeholder="Note Content"
          value={content}
          onChangeText={setContent}
          multiline={true}
        />
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{note?.creationDate || ''}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={clipboardBtnHandler}>
            <FontAwesome name="clipboard" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsColorPickerVisible(!isColorPickerVisible)}>
            <MaterialIcons name="color-lens" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="image" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <ColourPicker
        isColorPickerVisible={isColorPickerVisible}
        setIsColorPickerVisible={setIsColorPickerVisible}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
      />
    </View>
  );
};

export default NoteEditorScreen;

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
  btn: {
    // padding: 100,
  },
  titleContainer: {
    padding: 20,
    fontSize: 40,
    fontWeight: '500',
    borderBottomWidth: 2,
  },
  contentContainer: {
    padding: 20,
    fontSize: 18,
  },
  dateContainer: {
    padding: 10,
  },
  dateText: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  iconContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
