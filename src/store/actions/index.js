import { listRef } from "../../firebase";
const FETCH_LIST = "FETCH_LIST";

export const addToList = (newListItem) => async (dispatch) => {
  listRef.push().set(newListItem);
};

export const removeItemFromList = (removeItemFromList) => async (dispatch) => {
  listRef.child(removeItemFromList).remove();
};

export const fetchList = () => async (dispatch) => {
  listRef.on("value", (snapshot) => {
    dispatch({
      type: FETCH_LIST,
      payload: snapshot.val(),
    });
  });
};
