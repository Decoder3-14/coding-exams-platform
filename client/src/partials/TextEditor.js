import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class TextEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Editor
                editorState={this.props.editorState}
                onEditorStateChange={this.props.onChange}
            />
        );
    };
}

export default TextEditor;