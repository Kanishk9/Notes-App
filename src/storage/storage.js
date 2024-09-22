import * as SecureStore from 'expo-secure-store';

// Save note
export const saveNote = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

// Get note
export const getNote = async key => {
  try {
    const result = await SecureStore.getItemAsync(key);
    return result ? JSON.parse(result) : null;
  } catch (error) {
    console.error(error);
  }
};

// Delete note
export const deleteNote = async key => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error(error);
  }
};

// Getting all notes
export const getAllNotes = async () => {
  try {
    const keys = await SecureStore.getItemAsync('note_keys');
    return keys ? JSON.parse(keys) : [];
  } catch (error) {
    console.error(error);
  }
};

// Save a list of note keys
export const saveNoteKeys = async keys => {
  try {
    await SecureStore.setItemAsync('note_keys', JSON.stringify(keys));
  } catch (error) {
    console.error(error);
  }
};
