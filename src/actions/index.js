import { albumsRef } from "../config/firebase";
import { FETCH_ALBUMS } from "./types";

export const addAlbum = newAlbum => async dispatch => {
  albumsRef.push().set(newAlbum);
};

export const fetchAlbums = () => dispatch => {
  albumsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_ALBUMS,
      payload: snapshot.val()
    });
  });
};
