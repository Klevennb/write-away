import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import Editor from "./Editor";

function WritePage( props ) {
  const [title, setTitle ] = useState('');
    const [editorContents, setEditorContents] = useState("");


  const changeTitle = (event) => {
    setTitle(event.target.value);
  }
  
  const checkState = () => {
    console.log(title, editorContents);
  }

  const saveEntry = () => {
    if (title && editorContents !== null) {
      props.dispatch({ type: "ADD_ENTRY", payload: {contents: editorContents, title: title} });
    }
  }

  const updateSaveContents = useCallback(
    (entry) => {
      setEditorContents(entry);
    },
    [],
  )

  return (
    <div style={styles.editor} class="row justify-content-center">
      <input placeholder="Set Title" onChange={changeTitle} />
      <button onClick={checkState}>Check State</button>
      <div className="col-4">
        <Editor updateSaveContents={updateSaveContents} />
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
  // item: {
  //   color: "black"

  //   complete: {
  //     textDecoration: "line-through"
  //   },

  //   due: {
  //     color: "red"
  //   }
  // },
};
