import { createContext, useState } from "react";
import './App.css'
import Router from "./Router/Router";
export const UserContext = createContext();
function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [logState, setLogState] = useState(false);
  const [dark, setDark] = useState(false);
  const [color, setColor] = useState("#872ca2");
  //DarkMode
  let body = document.querySelector("body");
  if (dark) {
    body.classList.add("body");
  } else body.classList.remove("body");
  //Add To Favorite
  const [addFavD,setAddFavD]=useState(false);
  const [addFavA,setAddFavA]=useState(false);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        currentUser,
        setCurrentUser,
        logState,
        setLogState,
        dark,
        setDark,
        color,
        setColor,
        addFavD,
        setAddFavD,
        addFavA,
        setAddFavA
      }}
    >
      <Router/>
    </UserContext.Provider>
  )
}

export default App
