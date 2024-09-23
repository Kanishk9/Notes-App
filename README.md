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

## Screen Shots
* Home Screen\
![Screenshot (61)](https://github.com/user-attachments/assets/dc6aff21-43f6-4c1f-9814-62751fc8e40c)

* Add/Edit Note Screen\
![Screenshot (62)](https://github.com/user-attachments/assets/4676b9bf-89c7-4c5b-afe1-44e27432588c)

* Delete Note Confirmation\
![Screenshot (69)](https://github.com/user-attachments/assets/3ffaf47f-b94f-49c4-a4cd-2cdd6a092e2c)

* Color Picker\
![Screenshot (63)](https://github.com/user-attachments/assets/13a6fdc8-779b-4985-b46c-977aba2c4fea)

* Image Picker\
![Screenshot (64)](https://github.com/user-attachments/assets/81fbb501-e099-41bc-8cfb-af3dc3754082)

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
│   │   ├── HomeScreen.jsx       # Screen for displaying notes
│   │   └── NoteEditorScreen.jsx        # Screen for creating/editing notes
│   ├── storage/
│   │   └── noteStore.js          # Zustand store for managing notes
│   │   └── storage.js            # For managing storage with expo-secure-store
│   ├── utils/
│   │   └── util.js               # Utility for additional functionality
├── App.tsx                            # Entry point of the app
├── package.json                       # Project dependencies and scripts
└── README.md                          # Project documentation (this file)
```
