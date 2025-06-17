import "./styles/App.css";
import { About, NotFound, Posts, Users } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Exercício Bloggers - React Router</h1>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
