import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { wordCounter } from '../../services/wordCountService';
import Editor  from './EditEntryEditor'



export const EditEntryPage = () => {
    const entry = useSelector((state) => state.editReducer);
      const dispatch = useDispatch();


    useEffect(() => {
      console.log("entry", entry);
    }, [entry]);

  const [title, setTitle ] = useState(entry?.title);
  const [wordCount, setWordCount] = useState(entry?.length);
  const [editorContents, setEditorContents] = useState();


  const changeTitle = (event) => {
    setTitle(event.target.value);
  }
  
  const checkState = () => {
console.log("entry", editorContents, title, wordCount);  }

  const saveEntry = () => {
    console.log(' save ', editorContents, entry);
    if (title && editorContents !== null) {
      dispatch({
        type: "EDIT_ENTRY",
        payload: {
          contents: editorContents,
          title: title,
          entry_length: wordCount(editorContents),
          entry_id: entry.id,
        },
      });
    }
  }

  const updateSaveContents = useCallback(
    (entry) => {
      console.log('in callback', entry);
      setEditorContents(entry);
    },
    [],
  )

  return (
    <div className="row justify-content-center">
      <div>{entry && <div>Sup</div>}</div>
      <input placeholder={title} onChange={changeTitle} />
      <button onClick={checkState}>Check State</button>
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
  editor: {
    backgroundColor: "blue",
  },
};


export default EditEntryPage
