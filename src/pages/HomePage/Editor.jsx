import React, { useState, useEffect } from "react";
import {
  ContentState,
  convertToRaw,
  convertFromRaw,
  EditorState,
} from "draft-js";
import { Editor as Weditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = ({ updateSaveContents }) => {
    let _contentState = ContentState.createFromText("");
    const raw = convertToRaw(_contentState);
        const rawx = convertFromRaw(_contentState);
        const x = rawx

    const [contentState, setContentState] = useState(raw); // ContentState JSON

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
  );
};

// const Editor = ({ updateSaveContents }) => {
//   let _contentState = ContentState.createFromText("");
//   const raw = convertToRaw(_contentState);
//   const [contentState, setContentState] = useState(raw); // ContentState JSON

//   const getWordCount = () => {
//     let count = 0;
//     if (contentState !== raw) {
//       contentState.blocks.forEach((block) => {
//         count = count + block.text.split(/\b\S+\b/g).length;
//       });
//     }
//     return count ? count : 0;
//   };
//   useEffect(() => {
//     updateSaveContents(contentState, getWordCount());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [contentState, updateSaveContents]);

//   return (
//     <div className="App">
//       <Weditor
//         defaultContentState={contentState}
//         onContentStateChange={setContentState}
//         wrapperClassName="wrapper-class"
//         editorClassName="editor-class"
//         toolbarClassName="toolbar-class"
//       />
//     </div>
//   );
// };
export default Editor;
