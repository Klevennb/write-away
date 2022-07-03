import React, { useState, useEffect, useRef } from 'react';
import { ContentState, convertToRaw, RichUtils } from 'draft-js';
import { Editor as Weditor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { wordCounter } from '../../services/wordCountService'


const Editor = (props: any) => {
    const {updateSaveContents, focus} = props

  let _contentState = ContentState.createFromText('');
  const raw = convertToRaw(_contentState)
  const [contentState, setContentState] = useState(raw) // ContentState JSON

  useEffect(() => {
    updateSaveContents(contentState, wordCounter(contentState));
  }, [contentState, updateSaveContents]);

  const editorReference: any = useRef();
  useEffect(() => {
    editorReference.current.focusEditor();
  }, [editorReference]);

    useEffect(() => {
      if (focus) {
        editorReference.current.focusEditor();
      }
    
  }, [focus]);
  // const mapKeyToEditorCommand = (e) => {
    
  //   if (e.keyCode === 9 /* TAB */) {
  //     e.preventDefault()
  //     const newEditorState = RichUtils.onTab(
  //      e,
  //       contentState,
  //       4,/* maxDepth */

  //     );
  //     if (newEditorState !== this.state.editorState) {
  //       onChange(newEditorState);
  //     }
  //     return;
  //   }
  // }

  return (
    <div className="App">
      <Weditor
//       toolbar={{
// options: ["inline", "list", "link", "history"],
// list: {
// options: ["unordered", "ordered"],
// },
// }}
        ref={editorReference}
        initialContentState={contentState}
        onContentStateChange={setContentState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onTab={}
      />
    </div>
  )
}
export default Editor;