export const createItem = (listItem) => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_ITEM" }, listItem);
  };
};
