import create from 'zustand';
import storage from './mmkv';

export const useNoteStore = create((set, get) => ({
  //Initial State
  notes: [],

  //Get notes
  getNote: () => {
    const savedNotes = storage.getString('notes');
    if (savedNotes) {
      storage.set({notes: JSON.parse(savedNotes)});
    }
  },

  //Add note
  addNote: note => {
    const newNotes = [...get().notes, note];
    set({notes: newNotes});
    storage.set('notes', JSON.stringify(newNotes));
  },

  // Edit note
  editNote: updatedNote => {
    const updatedNotes = get().notes.map(note =>
      note.id === updatedNote.id ? updatedNote : note,
    );
    set({notes: updatedNotes});
    storage.set('notes', JSON.stringify(updatedNotes));
  },

  //Delete note
  deleteNote: noteId => {
    const updatedNotes = get().notes.filter(note => note.id !== noteId);
    set({notes: updatedNotes});
    storage.set('notes', JSON.stringify(updatedNotes));
  },
}));
