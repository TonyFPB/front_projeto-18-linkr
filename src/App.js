import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Timeline from "./pages/Timeline";
import Trending from "./components/Trending/Trending";
import HashtagPage from "./pages/HashtagPage/HashtagPage";


function App() {
  console.log("teste")
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/timeline" element={<Timeline/>}/>
        <Route path="/trendings" element={<Trending/>}/>
        <Route path="/hashtag/:hashtag" element={<HashtagPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
