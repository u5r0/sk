import { Route, Routes } from "react-router-dom";

import {
  Dashboard,
  Page,
  Layout,
  Login,
  Register,
  RequireAuth,
  Blogs,
  Prices,
} from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
