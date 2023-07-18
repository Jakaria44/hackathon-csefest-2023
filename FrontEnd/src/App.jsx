import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contents from "./pages/Contents";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import UploadArt from "./components/Upload/UploadArt";
import {useState, createContext, useEffect} from "react";
import PageNotFound from "./pages/PageNotFound";
import Details from "./pages/Details";
import {StateContextProvider} from "./Context/StateContext";

const App = ({children}) => {

  return (
    <>
      <StateContextProvider>

        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/gallery" element={<Contents/>}/>
          <Route path="/gallery/:contentType" element={<Contents/>}/>
          <Route
            path="gallery/:teacherOrSubject/:contentType"
            element={<Contents/>}
          />
          <Route path="/upload" element={<UploadArt/>}/>
          {/*<Route path="/login" element={<Login />} />*/}
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>

        <Footer/>
    </StateContextProvider>
    </>
  );
}

export default App;