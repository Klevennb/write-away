import React from "react";
import Editor from "./Editor";

function WritePage() {
  return (
    <div style={styles.editor} class="row justify-content-center">
      <div class="col-4">
        <Editor />
      </div>
    </div>
  );
}

export default WritePage;

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
