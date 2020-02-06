import db from "../../firebase/firebaseInit";

export const createAlbum = album => {
  return (dispatch, getState, { getFirestore }) => {
    db.collection("albums")
      .add({
        ...album,
        dateAdded: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_ALBUM_SUCCESS", album });
      })
      .catch(err => {
        dispatch({ type: "CREATE_ALBUM_ERROR", err });
      });
  };
};
