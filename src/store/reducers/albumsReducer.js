const initState = {
  albums: [
    {
      AlbumTitle: "The Age of Quarrel",
      Artist: "Cro-Mags",
      Format: "Vinyl",
      Genre: "Punk Rock"
    },
    {
      AlbumTitle: "Attack and Release",
      Artist: "The Black Keys",
      Format: "CD",
      Genre: "Garage Rock"
    },
    {
      AlbumTitle: "All the Feals",
      Artist: "Fitz and the Tantrums",
      Format: "Vinyl",
      Genre: "Soul"
    }
  ]
};

const albumReducer = (state = initState, action) => {
  return state;
};

export default albumReducer;
