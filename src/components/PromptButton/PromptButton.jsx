import React, { useState, useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";


export const PromptButton = () => {
    const prompts = useSelector((state) => state.promptsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (prompts.length === 0) {
            console.log('in useEffect');
            dispatch({ type: "GET_PROMPTS" });
        }
    }, [prompts, dispatch]);

    const handleGetPrompt = () => {
        console.log(prompts);
    }
    return(
        <button onClick={handleGetPrompt}>Get Prompt</button>
    )

}
