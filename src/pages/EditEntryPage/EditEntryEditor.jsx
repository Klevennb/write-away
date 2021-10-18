import React, { useState, useEffect } from "react";
import { ContentState, convertToRaw, convertFromRaw, EditorState } from "draft-js";
import { Editor as Weditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = ({ updateSaveContents, previousContents }) => {
  console.log("prevCont", previousContents);
  const init = convertFromRaw(JSON.parse(previousContents));
  const [contentState, setContentState] = useState(init);
    const [saveContent, setSaveContent] = useState(previousContents);

  const [editState, setEditState] = useState(
    EditorState.createWithContent(contentState)
  );

  useEffect(() => {
    updateSaveContents(convertToRaw(editState.getCurrentContent()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateSaveContents, saveContent]);

  const handleChange = () => {
        setSaveContent(convertToRaw(editState.getCurrentContent()));

    // console.log("yo", convertToRaw(editState.getCurrentContent()));
  };

  return (
    <div className="App">
      <Weditor
        //   initialContentState={contentState}
        editorState={editState}
        onEditorStateChange={setEditState}
        onContentStateChange={handleChange}
        // onContentStateChange={setContentState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
};
export default Editor;
