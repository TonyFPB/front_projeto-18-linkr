import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import UserContext from "./contexts/UserContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Timeline from "./pages/Timeline";

function App() {
  const [user, setUser] = useState(undefined);

  return (
    <UserContext.Provider value={{user, setUser}}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/timeline" element={<Timeline/>}/>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
