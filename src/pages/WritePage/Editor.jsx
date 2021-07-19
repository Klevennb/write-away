import React, { useState, useEffect } from 'react';
import { ContentState, convertToRaw } from 'draft-js';
import { Editor as Weditor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = ({updateSaveContents}) => {
  let _contentState = ContentState.createFromText('');
  const raw = convertToRaw(_contentState)
  const [contentState, setContentState] = useState(raw) // ContentState JSON

  useEffect(() => {
    updateSaveContents(contentState);
  }, [contentState, updateSaveContents]);

  return (
    <div className="App">
      <Weditor
        defaultContentState={contentState}
        onContentStateChange={setContentState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  )
}
export default Editor;