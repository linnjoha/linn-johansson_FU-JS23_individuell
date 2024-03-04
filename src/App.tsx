import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Status from "./pages/Status";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      /* indexelement */
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/profil" element={<Profile />} />
      <Route path="/status" element={<Status />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
