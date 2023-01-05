const description = (state = [], action) => {
    switch (action.type) {
      case "SET_DESCRIPTION":
        return action.payload;
      default:
        return state;
    }
  };

export default description;