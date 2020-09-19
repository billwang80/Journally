import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RichEditor from 'react-native-pell-rich-editor'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg';

function NoteScreen() {
    return (
        <RichEditor />
    )
}

export default NoteScreen;