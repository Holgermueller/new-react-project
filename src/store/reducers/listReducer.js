const initState = {
  itemsOnList: [
    { id: "1", artist: "someguy", title: "title1" },
    { id: "2", artist: "anotherguy", title: "title2" },
    { id: "3", artist: "yetanotherguy", title: "title3" },
  ],
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      console.log("create item", action.listItem);
      return state;
    default:
      return state;
  }
};

export default listReducer;
