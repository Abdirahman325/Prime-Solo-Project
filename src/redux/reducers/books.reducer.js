//database get for books
const books = (state = [], action) => {
    switch (action.type) {
      case "SET_DATABOOK":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default books;