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
  Contact,
} from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Page />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
