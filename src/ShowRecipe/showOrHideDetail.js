import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideDetails, showDetails } from "../actions";

export default function useHelper() {
    const details = useSelector(state => state.helper)
    const dispatch = useDispatch();
    const hideDetail = () => {
        dispatch(hideDetails())
    }
    const showDetail = () => {
        dispatch(showDetails());
    }
    return {
        details, hideDetail, showDetail
    };
}
