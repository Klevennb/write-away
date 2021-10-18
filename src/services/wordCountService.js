import { convertToRaw } from 'draft-js';


export const wordCounter = ( writingContents ) => {
    //   const raw = convertToRaw(writingContents)

    let count = 0;  
    //   if (writingContents !== raw) {
        writingContents.blocks.forEach((block) => {
          count = count + block.text.split(/\b\S+\b/g).length;
        });
    //   }
    return count ? count : 0;
  };