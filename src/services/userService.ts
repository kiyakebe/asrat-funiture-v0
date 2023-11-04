// import { useEffect } from "react";
// import apiClient from "./api-client";

// const checkUserLogedin = () => {
//   useEffect(() => {
//     const access = localStorage.getItem("access");
//     const data = { token: access };
//     const checkLigedin = () => {
//       apiClient
//         .post("/auth/jwt/verify/", data)
//         .then(() => {
//           setIsLodegin(true);
//         })
//         .catch((errors) => setIsLodegin(true));
//     };
//     checkLigedin();
//   }, []);
// };

// export default checkUserLogedin;