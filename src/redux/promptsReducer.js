const promptsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROMPTS':
            return action.payload;
        default:
            return state;
    }
};

export default promptsReducer;