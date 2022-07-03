import React, { useState, useCallback, useRef, useEffect } from "react";
import Editor from "./Editor";
import dayjs from 'dayjs'
import { Container, EditorBox, StyledInput, StyledButton } from "./styles";
import { Box, Grid } from "@mui/material";

const  WritePage = ( props: any ) => {
  const [title, setTitle ] = useState(dayjs(Date.now()).format('DD/MM/YYYY'));
  const [wordCount, setWordCount] = useState(0);
    const [focus, setFocus] = useState(false);

  const [editorContents, setEditorContents] = useState();

    const editorReference: any = useRef();
useEffect(() => {
  editorReference?.current?.focusEditor();
}, [editorReference]);

  const changeTitle = (event: any) => {
    setTitle(event.target.value);
  }

  const handleFocus = () => {
    setFocus(true);
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
    (entry: any, count: any) => {
      setEditorContents(entry);
      setWordCount(count)
    },
    [],
  )

  return (
    <Container  >
      <StyledInput label="Set Title" onChange={changeTitle}/>
      <Grid container justifyContent={'center'} width={'80%'}>
              <StyledButton>Get Prompt!</StyledButton>
      </Grid>

      <div>
        <EditorBox onClick={handleFocus}>
          <Editor updateSaveContents={updateSaveContents} focus={focus} />
        </EditorBox>
      </div>
      <StyledButton onClick={saveEntry}>Save</StyledButton>
    </Container>
  );
}

export default WritePage;

