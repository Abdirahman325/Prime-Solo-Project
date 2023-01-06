//database get for books
const books = (state = [], action) => {
    switch (action.type) {
      case "SET_DATABOOKS":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default books;