import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from 'react-loading';


export const TrendingStories = () => {
    const dispatch = useDispatch();
    // const entries = useSelector((state) => state.entry);

    const [trending, setTrending] = useState([]);

    useEffect(() => {
        dispatch({ type: "GET_TRENDING" });
    }, []);
    // useEffect(() => {
    // }, [entries]);
    return (
        <div>
            <ReactLoading type='cylon' color='blue' height={'20%'} width={'20%'} />

        </div>
    )
}
