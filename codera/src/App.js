import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './routes/Home'
import Course from "./routes/Course";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Error from "./routes/Error";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </>
  );
}

export default App;
