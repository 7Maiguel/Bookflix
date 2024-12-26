import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { GlobalContext } from "./contexts";
import useLocalStorage from "./hooks/localstorage";
import NavBar from "./components/nav/NavBar";
import PageContainer from "./components/common/PageContainer";
import BookList from "./components/books/BookList";
import GenreList from "./components/genres/GenreList";
import UserInfo from "./components/user/UserInfo";
import NotFound from "./pages/NotFound";
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

  return (
    <GlobalContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      <BrowserRouter basename="Bookflix">
        <NavBar />
        <Routes>
          <Route
            index
            element={
              isUserLoggedIn ? (
                <PageContainer title="Nuestra selección para ti">
                  <BookList />
                </PageContainer>
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            path="/generos"
            element={
              isUserLoggedIn ? (
                <PageContainer title="Géneros">
                  <GenreList />
                </PageContainer>
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            path="/perfil"
            element={
              isUserLoggedIn ? (
                <PageContainer title="Mi Perfil">
                  <UserInfo />
                </PageContainer>
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}
