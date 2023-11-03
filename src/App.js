import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Nav from "./components/Nav";
import Foooter from "./components/Foooter";
import PostAJob from "./components/PostAJob";
import { FindJobDash } from './components/FindJobDash';

import { BrowserRouter,HashRouter,Route,Routes,Switch, } from "react-router-dom";
function App() {
  return (
  <div>
   <BrowserRouter>
   <Nav />
   <Routes>
    <Route path ="/find-work" element={<find-work/>}></Route>
    <Route path ="/applications" element={<student-list/>}></Route>
    <Route path ="/skill" element={<student-list/>}></Route>
   </Routes>
   </BrowserRouter>
   <FindJobDash />
<PostAJob />

   <Foooter />
  </div>
  );
}

export default App;
