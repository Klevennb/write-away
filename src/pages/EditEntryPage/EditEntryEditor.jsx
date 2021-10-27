import React, { useState, useEffect } from "react";
import { convertToRaw, convertFromRaw, EditorState } from "draft-js";
import { Editor as Weditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = ({ updateSaveContents, previousContents }) => {
  const init = convertFromRaw(JSON.parse(previousContents));
  const [contentState] = useState(init);
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
  };

  return (
    <div className="App">
      <Weditor
        editorState={editState}
        onEditorStateChange={setEditState}
        onContentStateChange={handleChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
};
export default Editor;
