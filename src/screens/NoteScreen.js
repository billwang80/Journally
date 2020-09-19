import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextEditorComponent } from '../components/TextEditorComponent.js';
import '../styles/TextEditor.css';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function NoteScreen() {
    return (
        <div className="notescreen">
            <TextEditorComponent />
        </div>
    )
}

export default NoteScreen;