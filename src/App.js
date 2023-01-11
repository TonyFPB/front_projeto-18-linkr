import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Timeline from "./pages/Timeline";
import TimelineHashtag from "./pages/HashtagPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/timeline" element={<Timeline/>}/>
        <Route path="/user/:id" element={<UserPage/>}/>
        <Route path="/hashtag/:hashtag" element={<TimelineHashtag/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
