# Notes App

This is a note-taking application built with React Native and Expo, featuring local storage using expo-secure-store, state management with zustand, and image handling with expo-image-picker. Users can create, edit, and delete notes with a title, content, background color, and optional header image. Notes can also be sorted by name or creation date.

## Features

* Create and Edit Notes: Add a title, content, background color, and optional header image to your notes.
* Persistent Storage: Notes are stored securely using expo-secure-store, which ensures sensitive data remains safe.
* Image Picker: Use expo-image-picker to select images for the note's header.
* State Management: Uses zustand for efficient and lightweight state management.
* Background Color Customization: Select a custom background color for each note using a color picker.
* Sorting: Sort notes by name or creation date.

## Technologies Used
* React Native
* Expo
* expo-secure-store
* zustand
* react-native-vector-icons
* expo-image-picker
* react-native-wheel-color-picker

## Folder Structure
```bash
expo-note-taking-app/
├── src/
│   ├── components/
│   │   ├── Button.jsx            # Component for button
│   │   ├── ColorPicker.jsx       # Component for color picker modal
│   │   ├── DeleteWarnModal.jsx   # Component for deletion confirmation
│   │   ├── HeaderImagePicker.jsx # Component for picking an image
│   │   └── NoteItem.jsx          # Component for displaying individual note
│   ├── screens/
│   │   ├── HomeScreens.jsx       # Screen for displaying notes
│   │   └── NoteEditor.jsx        # Screen for creating/editing notes
│   ├── storage/
│   │   └── noteStore.js          # Zustand store for managing notes
│   │   └── storage.js            # For managing storage with expo-secure-store
│   ├── utils/
│   │   └── util.js               # Utility for additional functionality
├── App.tsx                            # Entry point of the app
├── package.json                       # Project dependencies and scripts
└── README.md                          # Project documentation (this file)
```
