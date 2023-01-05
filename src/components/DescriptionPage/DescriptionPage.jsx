// import React from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";

// function descriptionPage() {
//   const description = useSelector((store) => store.description);
//   const selection = useSelector((store) => store.search);
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   useEffect(() => {
//     dispatch({
//       type: "FETCH_DESCRIPTION",
//       payload: id,
//     });
//     dispatch({ type: "FETCH_DATABASE" });
//   }, []);


// }
// export default descriptionPage;
