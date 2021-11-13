import React, { useState, useCallback, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Editor from "./Editor";
import {PromptButton} from '../../components/PromptButton/PromptButton';
import Swal from 'sweetalert2';


function WritePage( props ) {
  const [title, setTitle] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [editorContents, setEditorContents] = useState();
  const prompts = useSelector((state) => state.promptsReducer);
  const [allPrompts, setAllPrompts] = useState(prompts)
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!prompts) {
  //     dispatch({ type: "GET_PROMPTS" });
  //   }

  // }, [prompts]);

  const changeTitle = (event) => {
    setTitle(event.target.value);
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

  // const handleGetPrompt = () => {
  //   console.log(prompts);
  // }

  const updateSaveContents = useCallback(
    (entry, count) => {
      setEditorContents(entry);
      setWordCount(count)
    },
    [],
  )

  return (
    <div  className="row justify-content-center">
      <input style={{marginLeft: '20px', marginRight:'20px'}} placeholder="Set Title" onChange={changeTitle} />
      <PromptButton />
      <div className="col-8" >
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
