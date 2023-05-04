//  import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/main/registration";
 


import Login from "./login";


function app() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
           

        </Routes>
      </BrowserRouter>


    </>

  )
}

export default app;