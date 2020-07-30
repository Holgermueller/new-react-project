export const createItem = (listItem) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "CREATE_ITEM", listItem });
  };
};
