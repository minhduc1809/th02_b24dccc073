import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import WeatherApp from "./components/Bai1";
import StudentList from "./components/Bai2List";
import StudentDetail from "./components/Bai2Detail";
import NewsApp from "./components/Bai3";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Trang chủ</Link>
        <Link to="/weather">Bài 1</Link>
        <Link to="/students">Bài 2</Link>
        <Link to="/news">Bài 3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/news" element={<NewsApp />} />
      </Routes>
    </Router>
  );
};

export default App;
