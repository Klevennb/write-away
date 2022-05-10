export const wordCounter = ( writingContents: any ) => {
    let count = 0;  
        writingContents.blocks.forEach((block: any) => {
          count = count + block.text.split(/\b\S+\b/g).length;
        });
    //   }
    return count ? count : 0;
  };