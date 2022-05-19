export const wordCounter = ( writingContents ) => {
    let count = 0;  
        writingContents.blocks.forEach((block) => {
          count = count + block.text.split(/\b\S+\b/g).length;
        });
    return count ? count : 0;
  };