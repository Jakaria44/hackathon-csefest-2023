import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contents from "./pages/Contents";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import UploadArt from "./components/Upload/UploadArt";
import {useState, createContext, useEffect} from "react";
import PageNotFound from "./pages/PageNotFound";
import Details from "./pages/Details";
import {useContract} from "@thirdweb-dev/react";
const address = "0xe611ad45aA3F35270f52D66c6230bcC558A35EdD";
export const StateContext = createContext(null);

const App = ({children}) => {

  const {contract} = useContract(address);
  return (
    <>
      <StateContext.Provider value={{
        contract,
        address
      }}>
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
      </StateContext.Provider>

    </>
  );
}

export default App;