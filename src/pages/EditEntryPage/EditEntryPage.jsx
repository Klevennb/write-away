import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { wordCounter } from '../../utils/wordCounter';
import Editor  from './EditEntryEditor'



export const EditEntryPage = () => {
  const entry = useSelector((state) => state.editReducer);
  const dispatch = useDispatch();



  const [title, setTitle] = useState(entry?.title);
  const [wordCount, setWordCount] = useState(entry?.length);
  const [editorContents, setEditorContents] = useState();
  const [isPublic, setIsPublic] = useState(entry?.public);



  const changeTitle = (event) => {
    setTitle(event.target.value);
  }
  

  const saveEntry = () => {
    if (title && editorContents !== null) {
      dispatch({
        type: "EDIT_ENTRY",
        payload: {
          contents: editorContents,
          title: title,
          entry_length: wordCounter(editorContents),
          entry_id: entry.id,
          isPublic: isPublic, 
        },
      });
    }
  }

  const updateSaveContents = useCallback(
    (entry) => {
      setEditorContents(entry);
      setWordCount(wordCounter(entry))
    },
    [],
  )
  const handleCheck = () => {
    setIsPublic(!isPublic)
  }

  return (
    <div className="row justify-content-center">

      <text style={styles.title}>{title}</text>
      <div className="row" >           
        <text>Do you want to make this public?</text>
        <input
          name="isGoing"
          type="checkbox"
          checked={isPublic}
          onChange={handleCheck} /> 
      </div>
      <input placeholder={title} onChange={changeTitle} />
      <div className="col-4">
        <div style={styles.editor}>
          {entry.contents && (
            <Editor
              updateSaveContents={updateSaveContents}
              previousContents={entry.contents}
            />
          )}
        </div>
      </div>
      <button onClick={saveEntry}>Save</button>
    </div>
  );
}

const styles = {
  title: {
    fontSize: '40px',
  },
  editor: {
    backgroundColor: "blue",
  },
};


export default EditEntryPage
