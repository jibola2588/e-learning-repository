import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/home/Landing-Page";
import CoursePage from "./pages/coursePage/CoursePage";
import { BlogPage } from "./pages/blogPage/BlogPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/blog" element={<BlogPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
