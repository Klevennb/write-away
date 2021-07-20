import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import Editor from "./Editor";

function WritePage( props ) {
  const [title, setTitle ] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [editorContents, setEditorContents] = useState();


  const changeTitle = (event) => {
    setTitle(event.target.value);
  }
  
  const checkState = () => {
    console.log(title, editorContents, wordCount);
  }

  const saveEntry = () => {
    if (title && editorContents !== null) {
      props.dispatch({
        type: "ADD_ENTRY",
        payload: {
          contents: editorContents,
          title: title,
          entry_length: wordCount,
        },
      });
    }
  }

  const updateSaveContents = useCallback(
    (entry, count) => {
      setEditorContents(entry);
      setWordCount(count)
    },
    [],
  )

  return (
    <div  class="row justify-content-center">
      <input placeholder="Set Title" onChange={changeTitle} />
      <button onClick={checkState}>Check State</button>
      <div className="col-4" >
        <div style={styles.editor}>
          <Editor updateSaveContents={updateSaveContents} />
        </div>
      </div>
      <button onClick={saveEntry}>Save</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(WritePage);

const styles = {
  editor: {
    backgroundColor: "blue",
  },
};
