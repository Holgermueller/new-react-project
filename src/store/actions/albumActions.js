export const createAlbum = album => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_ALBUM_SUCCESS", album });
  };
};
