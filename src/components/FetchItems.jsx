import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitialItems } from "../store/itemSlice";
import {
  markFetchDone,
  markFetchingFinished,
  markFetchingStarted,
} from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();
  // console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(markFetchingStarted());
    fetch("https://dummyjson.com/products?limit=100", { signal })
      .then((response) => response.json())
      .then((items) => {
        dispatch(addInitialItems(items.products));
        dispatch(markFetchDone());
        dispatch(markFetchingFinished());
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
