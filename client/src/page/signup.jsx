// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { RegisterPendings, SignupComponent } from "../components";
// import instance from "../config/instance";
// import { setLoading } from "../redux/loading";
// import "./style.scss";

// const Signup = () => {
//   const { user } = useSelector((state) => state);

//   const [pending, setPending] = useState(false);

//   const { id } = useParams();

//   const dispatch = useDispatch();

//   const location = useLocation();

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       if (
//         location?.pathname === "/signup" ||
//         location?.pathname === "/signup/"
//       ) {
//         setPending(false);
//         setTimeout(() => {
//           dispatch(setLoading(false));
//         }, 1000);
//       } else {
//         const checkPending = async () => {
//           let res = null;
//           try {
//             res = await instance.get("/api/user/checkPending", {
//               params: {
//                 _id: id,
//               },
//             });
//           } catch (err) {
//             console.log(err);
//             if (err?.response?.status === 404) {
//               navigate("/404");
//             } else {
//               alert(err);
//               navigate("/signup");
//             }
//           } finally {
//             if (res?.data?.status !== 208) {
//               setPending(true);
//               setTimeout(() => {
//                 dispatch(setLoading(false));
//               }, 1000);
//             }
//           }
//         };

//         checkPending();
//       }
//     }
//   }, [location]);

//   return (
//     <div className="Auth">
//       <div className="inner">
//         {pending ? (
//           <RegisterPendings _id={id} />
//         ) : (
//           <>
//             <SignupComponent />

//             <div className="bottum">
              
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RegisterPendings, SignupComponent } from "../components";
import instance from "../config/instance";
import { setLoading } from "../redux/loading";
import { documentsContext } from "../App"; // Import the context
import "./style.scss";

const Signup = () => {
  const { user } = useSelector((state) => state);
  const [pending, setPending] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { changeColorMode } = useContext(documentsContext); // Use context for color mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (!user) {
      if (
        location?.pathname === "/signup" ||
        location?.pathname === "/signup/"
      ) {
        setPending(false);
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      } else {
        const checkPending = async () => {
          let res = null;
          try {
            res = await instance.get("/api/user/checkPending", {
              params: {
                _id: id,
              },
            });
          } catch (err) {
            console.log(err);
            if (err?.response?.status === 404) {
              navigate("/404");
            } else {
              alert(err);
              navigate("/signup");
            }
          } finally {
            if (res?.data?.status !== 208) {
              setPending(true);
              setTimeout(() => {
                dispatch(setLoading(false));
              }, 1000);
            }
          }
        };

        checkPending();
      }
    }
  }, [location]);

  const toggleColorMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      changeColorMode(newMode);
      document.body.classList.toggle("dark", newMode);
      document.body.classList.toggle("light", !newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`Auth ${darkMode ? "dark" : "light"}`}>
      <div className="inner">
        <button onClick={toggleColorMode} className="toggle-button">
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
        {pending ? (
          <RegisterPendings _id={id} />
        ) : (
          <>
            <SignupComponent />
            <div className="bottum"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
