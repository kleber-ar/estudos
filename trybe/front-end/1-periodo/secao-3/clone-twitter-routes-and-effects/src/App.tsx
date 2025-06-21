import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Profile from "./pages/profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
