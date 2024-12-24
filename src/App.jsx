import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { GlobalContext } from "./contexts";
import useLocalStorage from "./hooks/localstorage";
import NavBar from "./components/nav/NavBar";
import NotFound from "./pages/NotFound";
import Genres from "./pages/Genres";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";

export function App() {
  const [sessionLoggedIn, setSessionLoggedIn] = useLocalStorage(
    "logged_in",
    false,
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(sessionLoggedIn);

  useEffect(() => {
    setSessionLoggedIn(isUserLoggedIn);
  }, [isUserLoggedIn]);

  useEffect(() => {});

  return (
    <GlobalContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      <BrowserRouter basename="Bookflix">
        <NavBar />
        <Routes>
          <Route index element={isUserLoggedIn ? <Home /> : <Login />}></Route>
          <Route
            path="/generos"
            element={isUserLoggedIn ? <Genres /> : <Login />}
          ></Route>
          <Route
            path="/perfil"
            element={isUserLoggedIn ? <Profile /> : <Login />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}
