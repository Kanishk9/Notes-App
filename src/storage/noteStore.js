import {create} from 'zustand';
import {
  saveNote,
  getNote,
  deleteNote,
  getAllNotes,
  saveNoteKeys,
} from './storage';

export const useNoteStore = create((set, get) => ({
  notes: [],
  noteKeys: [],

  // Load notes
  loadNotes: async () => {
    const noteKeys = await getAllNotes();
    const notes = await Promise.all(
      noteKeys.map(async key => await getNote(key)),
    );
    set({notes, noteKeys});
  },

  // Add new note
  addNote: async newNote => {
    const noteId = newNote.id || Date.now().toString();
    newNote.id = noteId;

    const {noteKeys, notes} = get();
    const updatedKeys = [...noteKeys, noteId];

    await saveNote(noteId, newNote);
    await saveNoteKeys(updatedKeys);

    set({
      notes: [...notes, newNote],
      noteKeys: updatedKeys,
    });
  },

  // Edit note
  editNote: async updatedNote => {
    const {notes} = get();
    await saveNote(updatedNote.id, updatedNote);

    set({
      notes: notes.map(note =>
        note.id === updatedNote.id ? updatedNote : note,
      ),
    });
  },

  // Delete note
  deleteNote: async id => {
    const {notes, noteKeys} = get();
    await deleteNote(id);

    const updatedKeys = noteKeys.filter(key => key !== id);
    await saveNoteKeys(updatedKeys);

    set({
      notes: notes.filter(note => note.id !== id),
      noteKeys: updatedKeys,
    });
  },

  // Sort notes by name
  sortNotesByName: () => {
    set(state => ({
      notes: [...state.notes].sort((a, b) => a.title.localeCompare(b.title)),
    }));
  },

  // Sort notes by creation date
  sortNotesByCreationDate: () => {
    set(state => ({
      notes: [...state.notes].sort((a, b) => b.createdAt - a.createdAt),
    }));
  },
}));
